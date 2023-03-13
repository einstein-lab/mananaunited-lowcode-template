const webpack = require("webpack");
// 读取 webpack.config.js 文件中的配置
const configFn = require("../config/webpack.prod.config");
const chalk = require("react-dev-utils/chalk");
const config = configFn();

console.log("Creating an optimized production build...");
webpack(config).run((_, state) => {
  const errors = state?.compilation?.errors;
  if (errors?.length) {
    for (const item of errors) {
      console.log(chalk.red(item?.message));
    }
    return console.log(chalk.red("build failed"));
  }
  console.log(chalk.green("build success"));
});
