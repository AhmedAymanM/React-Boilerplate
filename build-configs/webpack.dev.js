const commonPaths = require('./common-paths');
const webpack = require('webpack');

const config = {
  mode: 'development',
  entry: {
    main: commonPaths.entryPath
  },
  output: {
    filename: '[name].js'
  },
  devtool: 'cheap-module-source-map',
  devServer: {
    host: '0.0.0.0',
    port: 3000,
    hot: true,
    inline: true,
    publicPath: '/',
    contentBase: commonPaths.assetsPath,
    historyApiFallback: true,
    stats: 'errors-only'
  },
  plugins: [new webpack.HotModuleReplacementPlugin()],
  performance: {
    hints: false
  }
};

module.exports = config;
