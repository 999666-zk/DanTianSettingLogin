"use strict";
const merge = require("webpack-merge");
const prodEnv = require("./dev.env");

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  API_ROOT: '"https://www.dev.com"', //本地请求前缀
});
