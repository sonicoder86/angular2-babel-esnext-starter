'use strict';
let webpack = require('webpack');
let ExtractTextPlugin = require("extract-text-webpack-plugin");
let config = require('./webpack');

config.plugins = [
  new webpack.DefinePlugin({
    ENVIRONMENT: JSON.stringify('test')
  }),
  new ExtractTextPlugin("[name].css")
];
config.devtool = 'inline-source-map';

module.exports = config;
