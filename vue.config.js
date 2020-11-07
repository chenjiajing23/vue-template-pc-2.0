const BundleAnalyzerPlugin = require('webpack-bundle-analyzer');

const debug = process.env.NODE_ENV !== 'production';
let target = 'http://localhost:1234';

module.exports = {
  publicPath: process.env.VUE_APP_CDN_HOST,

  // 本地开发接口转发
  devServer: {
    proxy: {
      '/api': {
        target, //对应自己的接口
        changeOrigin: true,
        secure: false,
        pathRewrite: {
          '^/api': '/api'
        }
      }
    }
  },
  configureWebpack: config => {
    // 开发环境
    if (debug) {
      config.plugins.push(
        new BundleAnalyzerPlugin.BundleAnalyzerPlugin({
          openAnalyzer: false,
          analyzerPort: 8888
        })
      );
    } else {
      // 生产环境
    }
  }
};
