const webpack = require('webpack');

const config = {
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('staging')
      }
    })
  ]
};

module.exports = config;
