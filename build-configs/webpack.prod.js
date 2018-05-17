const commonPaths = require("./common-paths");
const UglifyJsWebpackPlugin = require("uglifyjs-webpack-plugin");
const CompressionWebpackPlugin = require("compression-webpack-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");

const config = {
  mode: "production",
  entry: {
    main: commonPaths.entryPath
  },
  output: {
    filename: "[name].[chunkhash:8].js"
  },
  stats: {
    children: false
  },
  optimization: {
    nodeEnv: "production",
    minimizer: [
      new UglifyJsWebpackPlugin({
        cache: true,
        parallel: true,
        sourceMap: true
      }),
      new OptimizeCSSAssetsPlugin({})
    ],
    splitChunks: {
      cacheGroups: {
        styles: {
          name: "styles",
          test: /\.css$/,
          chunks: "all",
          enforce: true
        }
      }
    }
  },
  plugins: [
    new CleanWebpackPlugin([commonPaths.outputPath], {
      allowExternal: true
    }),
    new CompressionWebpackPlugin()
  ]
};

module.exports = config;
