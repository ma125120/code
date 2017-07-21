var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var webpack = require('webpack');


var fs=require('fs');
var h=path.join(__dirname,'../html');
fs.readdir(h,function(err,entries) {
  var w=[];
  for(var idx in entries) {
    var _name=entries[idx],_w={},
        _path=path.join(__dirname,entries[idx]),
        type=_name.slice(_name.lastIndexOf('\.')+1);
    if(type=='html') {
      _w.template=_path;
      _w.filename=_name;
      w.push(new HtmlWebpackPlugin(_w));
    }
  }
  console.log(w)
  return w;
});

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

  ]
};