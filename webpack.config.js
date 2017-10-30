const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
var CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  devtool: 'source-map',
  context: path.join(__dirname, 'src'),
  entry: [
    './js/index.js',
    './scss/main.scss'
  ],
  output: {
    filename: 'js/main.js',
    path: path.resolve(__dirname, 'assets')
  },
  module: {
    rules: [
      {
        test: /scss[\\/]main\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [{
            loader: 'css-loader',
            options: { sourceMap: true, url: false }
          },
          {
            loader: 'sass-loader',
            options: { sourceMap: true } 
          }]
        })
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin('css/main.css'),
    new webpack.ProvidePlugin({
      jQuery: 'jquery',
      jquery: 'jquery',
      $: 'jquery'
    }),
    new CopyWebpackPlugin([
      {
        from: 'images',
        to: 'images'
      },
      {
        from: 'fonts',
        to: 'fonts'
      },
      {
        from: '../node_modules/bootstrap-sass/assets/fonts/bootstrap',
        to: 'fonts/bootstrap'
      },
      {
        from: '../node_modules/font-awesome/fonts',
        to: 'fonts/font-awesome'
      }
    ])
  ]
};