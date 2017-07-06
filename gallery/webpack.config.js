var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var webpack = require('webpack');
const BUILD="build/static";

module.exports = {
  // configuration
  entry: {
    app: './src/index.js',
    vendor:["react","react-dom"]
  }, //代表入口(总)文件，可以写多个
  output: {
    path: path.resolve(__dirname,BUILD), //输出文件夹
    filename: "js/[name].[chunkHash:5].js", //最终打包生成的文件名
    publicPath:'./static/'
  },
  module: {
    rules: [{
      test: /\.scss$/,
      use: ExtractTextPlugin.extract({
        fallback: 'style-loader',
        //resolve-url-loader may be chained before sass-loader if necessary
        use: ['css-loader', 'sass-loader']
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
      exclude:/node_modules/
    },{
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: 'img/[name].[hash:7].[ext]'
        }
    }]
  },
  plugins: [
    new ExtractTextPlugin("css/[name].css"),
    new HtmlWebpackPlugin({
      filename: path.resolve(__dirname, "build/index.html"),
      template: path.resolve(__dirname, "public/index.html"),
      chunks: ['app','vendor']
    }),
    new webpack.DefinePlugin({
      "process.env": { 
         NODE_ENV: JSON.stringify("production") 
      }
    }),
    new webpack.LoaderOptionsPlugin({
     minimize: true,
   }),
   new webpack.optimize.UglifyJsPlugin({
    compress: {
        properties: false,
        warnings: false
    },
    output: {
        beautify: true,
        quote_keys: true
    },
    mangle: {
        screw_ie8: false
    },
    sourceMap: false
  }),
   new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      filename: 'js/react.js',
    })
  ]
};