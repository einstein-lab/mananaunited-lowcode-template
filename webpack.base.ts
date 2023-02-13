import path from "path";
import fs from "fs-extra";
import { GlobSync } from "glob";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import autoprefixer from "autoprefixer";
//import { getThemeVariables } from 'antd/dist/theme'

const getWorkspaceAlias = () => {
  const basePath = path.resolve(__dirname, "");
  const pkg = fs.readJSONSync(path.resolve(basePath, "package.json")) || {};
  const results = {};
  const workspaces = pkg.workspaces;
  if (Array.isArray(workspaces)) {
    workspaces.forEach((pattern) => {
      const { found } = new GlobSync(pattern, { cwd: basePath });
      found.forEach((name) => {
        const pkg = fs.readJSONSync(
          path.resolve(basePath, name, "./package.json")
        );
        const filePath = path.resolve(basePath, name, "./src");
        // if (pkg.name === '@mananaunited/low-code-formily-antd') {
        results[`${pkg.name}$`] = filePath;
        // 处理直接从打包后的包导出的组件
        results[`${pkg.name}/esm`] = filePath;
        results[`${pkg.name}/lib`] = filePath;
        // } else {
        //   results[pkg.name] = filePath;
        // }
      });
    });
  }
  return results;
};

export default {
  mode: "development",
  devtool: "inline-source-map", // 嵌入到源文件中
  stats: {
    entrypoints: false,
    children: false,
  },
  entry: {
    playground: path.resolve(__dirname, "./src/App"),
  },
  output: {
    path: path.resolve(__dirname, "./build"),
    filename: "[name].[hash].bundle.js",
  },
  resolve: {
    modules: ["node_modules"],
    extensions: [".js", ".jsx", ".ts", ".tsx", ".json"],
    alias: getWorkspaceAlias(),
  },
  /**
   * 这里的外部映射-有时候会导致页面白屏，找不到react
   * 白屏是因为加载不到资源，更换成内网CDN可解决
   */
  externals: {
    react: "React",
    "react-dom": "ReactDOM",
    moment: "moment",
    antd: "antd",
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: [
          {
            loader: require.resolve("ts-loader"),
            options: {
              transpileOnly: true,
            },
          },
        ],
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, require.resolve("css-loader")],
      },
      {
        test: /\.less$/,
        use: [
          MiniCssExtractPlugin.loader,
          { loader: "css-loader" },
          {
            loader: "postcss-loader",
            options: {
              plugins: () => autoprefixer(),
            },
          },
          {
            loader: "less-loader",
            options: {
              // modifyVars: getThemeVariables({
              //   dark: true, // 开启暗黑模式
              // }),
              // modifyVars: {
              //   '@mananaunited-prefix': 'lc-mcui',
              //   '@ant-prefix': 'lc-ant',
              // },
              javascriptEnabled: true,
            },
          },
        ],
      },
      {
        test: /\.(woff|woff2|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
        use: ["url-loader"],
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        use: ["url-loader"],
      },
      {
        test: /\.html?$/,
        loader: require.resolve("file-loader"),
        options: {
          name: "[name].[ext]",
        },
      },
    ],
  },
};
