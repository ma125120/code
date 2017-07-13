var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var webpack = require('webpack');
module.exports = {
  // configuration
  entry: {
    app: './src/js/index.js',
    vendors: ['jquery']
  }, //代表入口(总)文件，可以写多个
  output: {
    path: path.resolve(__dirname, "build/js/"), //输出文件夹
    filename: "[name].[chunkHash:5].js", //最终打包生成的文件名
    publicPath:'./'
  },
  module: {
    rules: [{
      test: /\.scss$/,
      use: ExtractTextPlugin.extract({
        fallback: 'style-loader',
        //resolve-url-loader may be chained before sass-loader if necessary
        use: ['css-loader', 'sass-loader']
      })
    }, {
      test: /\.js|jsx$/, //是一个正则，代表js或者jsx后缀的文件要使用下面的loader
      loader: "babel-loader"
    }, ]
  },
  devServer: {
  contentBase: path.join(__dirname, "/__build"),
  compress: true,
  port: 9000,
  publicPath: "/__build"
},
  devtool: "source-map",
  plugins: [
    new ExtractTextPlugin("../css/[name].css"),
    new HtmlWebpackPlugin({
      filename: '../ma.html',
      template: 'build/index.html',
      chunks: ['app', 'vendors']
    }),
    new webpack.LoaderOptionsPlugin({
     minimize: true
   }),
     new webpack.HotModuleReplacementPlugin(),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendors',
      filename: 'vendors.js'
    })
  ]
};