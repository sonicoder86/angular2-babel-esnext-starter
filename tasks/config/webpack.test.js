'use strict';
let webpack = require('webpack');
let config = require('./webpack');

config.plugins = [
  new webpack.DefinePlugin({
    ENVIRONMENT: JSON.stringify('test')
  })
];
config.devtool = 'inline-eval';

module.exports = config;
