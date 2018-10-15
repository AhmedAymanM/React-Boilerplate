const webpackMerge = require('webpack-merge');
const commonConfig = require('./build-configs/webpack.common');

/* eslint-disable global-require */
module.exports = env => {
  switch (env.env) {
    case 'prod':
      const prodConfig = require(`./build-configs/webpack.prod.js`);
      return webpackMerge(commonConfig, prodConfig);
    case 'dev':
    default:
      const devConfig = require(`./build-configs/webpack.dev.js`);
      return webpackMerge(commonConfig, devConfig);
  }
};
/* eslint-enable global-require */
