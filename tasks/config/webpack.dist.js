'use strict';
let webpack = require('webpack');
let ExtractTextPlugin = require("extract-text-webpack-plugin");
let config = require('./webpack');

config.plugins = [
  new webpack.optimize.CommonsChunkPlugin(
    'vendor', 'vendor.js'
  ),
  new webpack.DefinePlugin({
    ENVIRONMENT: JSON.stringify('production')
  }),
  new webpack.optimize.UglifyJsPlugin({
    minimize: true,
    mangle: false,
    comments: false
  }),
  new ExtractTextPlugin("[name].css")
];

module.exports = config;
