'use strict';
let webpack = require('webpack');
let config = require('./webpack.config');

config.devtool = 'cheap-module-eval-source-map';
config.plugins = [
  new webpack.optimize.UglifyJsPlugin({minimize: true})
];
