var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var webpack = require('webpack');
const BUILD="build";

module.exports = {
  // configuration
  entry: {
    app:'./src/js/index.js',
  }, //代表入口(总)文件，可以写多个
  output: {
    path: path.resolve(__dirname,BUILD), //输出文件夹
    filename: "bundle.js", //最终打包生成的文件名
    publicPath:'/'
  },
  module: {
    rules: [{
      test: /\.scss$/,
      use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [{ loader: 'css-loader', options: { importLoaders: 1 } },'postcss-loader', 'sass-loader']
        })
      },{
        test: /\.css$/,
        exclude: /node_modules/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            { loader: 'css-loader', options: { importLoaders: 1 } },
            'postcss-loader'
          ]
        })
    }, {
      test: /\.js|jsx$/, //是一个正则，代表js或者jsx后缀的文件要使用下面的loader
      loader: "babel-loader",
    },{
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: 'img/[name].[hash:7].[ext]'
        }
    }, {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: 'fonts/[name].[hash:7].[ext]'
        }
    }]
  },
  devServer:{
    inline:true,
   // contentBase: path.resolve(__dirname,'node/ma.html'),
    // 输出文件的路径
    publicPath: '/',
    port:3001,
  },
  plugins: [
    new ExtractTextPlugin("index.css"),
    new HtmlWebpackPlugin({
      filename: path.join(__dirname,'./build/index.html'),
      template: path.join(__dirname,'./src/index.html'),
      chunks: ['app', 'vendors']
    }),
  ]
};