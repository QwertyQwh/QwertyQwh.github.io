const path = require('path');
const common = require("./webpack.common")
var HtmlWebpackPlugin = require("html-webpack-plugin")
const {merge} = require("webpack-merge")
const webpack = require('webpack');

module.exports = merge(common, {
  mode: "development",
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    assetModuleFilename: 'assets/[name][ext]',
    publicPath: '/',
  },
  plugins:[new HtmlWebpackPlugin({
    template: "./src/index.html"
 }),
 new webpack.DefinePlugin({
  PRODUCTION: JSON.stringify(false),
})
],
  module:{
    rules:[
      {
        test: /\.css/,
        use: ["style-loader","css-loader"]
      },
    ]
  }
});