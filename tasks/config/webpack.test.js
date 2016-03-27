'use strict';
let webpack = require('webpack');
let config = require('./webpack');

config.plugins = [
  new webpack.DefinePlugin({
    ENVIRONMENT: JSON.stringify('test')
  })
];
config.devtool = 'inline-cheap-source-map';

module.exports = config;
