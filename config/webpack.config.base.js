var webpack = require('webpack')
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

var outputFile = 'vue-shimmer'
var config = require('../package.json')

module.exports = {
  entry: './src/index.js',
  module: {
    rules: [
      {
        test: /.js$/,
        use: 'babel-loader',
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          MiniCssExtractPlugin.loader,
          'vue-style-loader',
          'css-loader',
          'sass-loader',
        ],
      },
    ],
  },
  plugins: [
    new webpack.DefinePlugin({
      'VERSION': JSON.stringify(config.version),
    }),
    new MiniCssExtractPlugin({
      filename: outputFile + '.css',
    }),
  ],
}
