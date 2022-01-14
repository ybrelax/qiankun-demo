const path = require('path');
const { name } = require('./package');

function resolve(dir) {
  return path.join(__dirname, dir);
}

module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? '/subapp/project3/' : '/',
  devServer: {
    port: 8003,
    headers: {
      "Access-Control-Allow-Origin": "*", // 主应用获取子应用时跨域响应头
    },
  },
  // 自定义webpack配置
  configureWebpack: {
    resolve: {
      alias: {
        '@': resolve('src'),
      },
    },
    output: {
      // 把子应用打包成 umd 库格式
      library: `${name}-[name]`,
      libraryTarget: 'umd',
      jsonpFunction: `webpackJsonp_${name}`,
    },
  },
};
