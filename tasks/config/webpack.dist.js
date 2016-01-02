'use strict';
let webpack = require('webpack');
let config = require('./webpack');

config.plugins = [
  new webpack.optimize.UglifyJsPlugin({
    minimize: true,
    mangle: false,
    comments: false
  })
];

module.exports = config;
