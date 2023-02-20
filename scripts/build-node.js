const webpack = require("webpack");
// 读取 webpack.config.js 文件中的配置
const configFn = require("../config/webpack.prod.config");
const config = configFn();

console.log("Creating an optimized production build...");
webpack(config).run((error, state) => {
  if (error) {
    console.error(error);
  }
  console.log("build success");
});
