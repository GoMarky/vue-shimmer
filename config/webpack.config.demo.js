var merge = require('webpack-merge');
var base = require('./webpack.config.base');
var path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = merge(base, {
  entry: './demo/main.js',
  devtool: 'eval-source-map',
  devServer: {
    contentBase: path.join(__dirname, 'build'),
    port: 8080,
  },
  output: {
    path: path.join(__dirname, 'build')
  },
  plugins: [
    new HtmlWebpackPlugin({
      inject: true,
      template: './demo/index.html'
    })
  ]
})
