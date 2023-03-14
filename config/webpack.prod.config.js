// 引入一个路径包
const path = require("path");
const ProgressBarPlugin = require("progress-bar-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = () => {
  return {
    stats: "errors-warnings",
    // 指定入口文件
    entry: path.resolve(__dirname, "../src/components/index.js"),
    // 指定打包文件的目录
    output: {
      path: path.resolve(__dirname, "../dist"),
      // 打包后文件名称
      filename: "index.js",
    },
    externals: {
      "react-dom": "ReactDOM",
      "@mananaunited/low-code-core": ["Designable", "Core"],
      "@mananaunited/low-code-extension": ["Designable", "Extension"],
      "@mananaunited/low-code-shared": ["Designable", "Shared"],
      "@mananaunited/low-code-react-settings-form": [
        "Designable",
        "ReactSettingsForm",
      ],
      "@mananaunited/low-code-react": ["Designable", "React"],
      "@mananaunited/low-code-formily-transformer": [
        "Designable",
        "FormilyTransformer",
      ],
      "@mananaunited/low-code-formily-setters": [
        "Designable",
        "FormilySetters",
      ],
      "@mananaunited/low-code-formily-design": ["Designable", "FormilyDesign"],
      "@mananaunited/low-code-formily-antd": ["Designable", "FormilyAntd"],
      /* formily依赖 */
      "@formily/core": ["Formily", "Core"],
      "@formily/react": ["Formily", "React"],
      "@formily/reactive": ["Formily", "Reactive"],
      "@formily/antd": ["Formily", "Antd"],
      "@formily/reactive-react": ["Formily", "ReactiveReact"],
      "@formily/shared": ["Formily", "Shared"],
    },
    target: "web",
    mode: "production",
    // 指定webpack打包时要使用的模块
    module: {
      // 指定loader加载的规则
      rules: [
        {
          test: /\.(js|jsx)$/,
          use: {
            loader: "babel-loader",
            options: {
              presets: ["@babel/preset-env", "@babel/preset-react"],
            },
          },
        },
        {
          test: /\.css$/,
          use: ["style-loader", "css-loader"],
        },
      ],
    },

    // 配置Webpack 插件
    // clean-webpack-plugin：webpack中的清除插件，每次打包dist都会先清除目录
    plugins: [new CleanWebpackPlugin(), new ProgressBarPlugin()],

    // 用来设置引用模块，可以将这些文件识别为模块(webpack配置.ts .js结尾的文件可为引用模块，相互export import)
    resolve: {
      extensions: [".ts", ".js", ".jsx", ".tsx", ".css", ".less"],
    },
    /* 是否压缩代码 */
    optimization: {
      minimize: false,
      usedExports: true,
      providedExports: true,
    },
  };
};
