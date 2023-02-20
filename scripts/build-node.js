const webpack = require("webpack");
// 读取 webpack.config.js 文件中的配置
const configFn = require("../config/webpack.prod.config");
const config = configFn();

webpack(config).run((error, state) => {
  // console.log(state);
  console.log(error);
});
