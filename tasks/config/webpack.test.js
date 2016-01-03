'use strict';
let webpack = require('webpack');
let config = require('./webpack');

config.plugins = [];
config.devtool = 'inline-source-map';

module.exports = config;
