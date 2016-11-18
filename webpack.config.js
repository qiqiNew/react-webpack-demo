var webpack = require('webpack')
var path = require('path')

var htmlWebpackPlugin = require('html-webpack-plugin')
var openBrowserPlugin = require('open-browser-webpack-plugin')
//var uglifyJsPlugin = webpack.optimize.UglifyJsPlugin
var commonsChunkPlugin = webpack.optimize.CommonsChunkPlugin

var APP_PATH = path.resolve(__dirname, 'app')
var DIST_PATH = path.resolve(__dirname, 'dist')
var NODE_MODULES = path.resolve(__dirname, 'node_modules')

module.exports = {
  entry: {
    vendor: ['react', 'react-dom'],
    index: path.resolve(APP_PATH, 'index.js')
  },
  output: {
    path: DIST_PATH,
    filename: '[name].js'
  },
  module: {
    loaders: [
      {
        test: /\.jsx?/,
        loader: 'babel',
        exclude: NODE_MODULES,
        query: {
          presets: ['react', 'es2015']// 也可以放在.babelrc下
        }
      },
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader'
      },
      {
        test: /\.(png|jpg|gif)/,
        loader: 'url-loader?limit=8192'
      }
    ]
  },
  plugins: [
    //new uglifyJsPlugin({minimize: true})
    new commonsChunkPlugin('vendor', 'vendor.js'),
    new htmlWebpackPlugin({
      title: 'react & webpack kit'
    }),
    new openBrowserPlugin({
      url: 'http://localhost:3000'
    }),

  ],
  devServer: {
    hot: true,
    inline: true,
    progress: true
  },
  devtool: 'source-map',
  resolve: {
    extension: ['', 'js', 'jsx', 'json']
  }
}
