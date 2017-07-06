var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var webpack = require('webpack');
const BUILD="build";

module.exports = {
  // configuration
  entry: {
    app: ['react-hot-loader/patch',
    // 开启 React 代码的模块热替换(HMR)
    'webpack-dev-server/client?http://localhost:3001',
    // 为 webpack-dev-server 的环境打包代码
    // 然后连接到指定服务器域名与端口
    'webpack/hot/only-dev-server',
    './src/index.js']
  }, //代表入口(总)文件，可以写多个
  output: {
    path: path.resolve(__dirname,BUILD), //输出文件夹
    filename: "bundle.js", //最终打包生成的文件名
    publicPath:'/'
  },
  module: {
    rules: [{
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
  devServer:{
    hot:true,
    inline:true,
    contentBase: path.resolve(__dirname, 'public/dev'),
    // 输出文件的路径
    publicPath: '/',
    port:3001,
    noInfo:true,
    quiet:true
  },
  plugins: [
  new ExtractTextPlugin("index.css"),
  new webpack.HotModuleReplacementPlugin(),
  new webpack.NamedModulesPlugin()
  ]
};