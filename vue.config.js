const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
  // devServer: {
  //   proxy: {
  //     "/api": {
  //       target: "https://lc.dantians.com/passport", // 后端API
  //       changeOrigin: true,
  //       pathRewrite: {
  //         "^/api": "",
  //       },
  //     },
  //   },
  // },
  publicPath: "/",
  // productionSourceMap: false,
  // devServer: {
  //   proxy: {
  //     "/": {
  //       target: "https://play.qingflow.com/",
  //       changeOrigin: true,
  //       pathRewrite: {
  //         "^/api": "",
  //       },
  //     },
  //   },
  // },
});
