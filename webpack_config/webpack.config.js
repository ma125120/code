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
    filename: "[name].[chunkHash:5].js"  //最终打包生成的文件名
  },
  module: {
    rules:  [{
      test: /\.scss$/,
      use: ExtractTextPlugin.extract({
        fallback: 'style-loader',
        //resolve-url-loader may be chained before sass-loader if necessary
        use: [{ loader: 'css-loader' , options: { importLoaders: 1 } },
            'postcss-loader', 'sass-loader']
      })
    },{
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            { loader: 'css-loader' , options: { importLoaders: 1 } },
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
    },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: 'fonts/[name].[hash:7].[ext]'
        }
    }]
  },
  plugins: [
    new ExtractTextPlugin('../css/my.css'),
    new HtmlWebpackPlugin({
      filename: path.join(__dirname,'./build/index.html'),
      template: path.join(__dirname,'./src/index.html'),
      chunks: ['app', 'vendors']
    }),
    new webpack.LoaderOptionsPlugin({
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
      name: 'vendors',
      filename: 'vendors.js'
    })
  ]
};