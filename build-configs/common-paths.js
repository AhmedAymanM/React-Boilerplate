const path = require('path');

module.exports = {
  entryPath: path.resolve(__dirname, '../src/index.js'),
  outputPath: path.resolve(__dirname, '../public'),
  htmlTemplatePath: path.resolve(__dirname, '../src/index.html'),
  favIconPath: path.resolve(__dirname, '../src/favicon.ico'),
  assetsPath: path.resolve(__dirname, '../public/assets')
};
