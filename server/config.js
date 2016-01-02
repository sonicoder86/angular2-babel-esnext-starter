'use strict';
let path = require('path');
let environment = process.env.NODE_ENV || 'production';

let localStaticPath = environment == 'production' ? '../client' : '../dist/client';
module.exports = {
  env: environment,
  port: process.env.PORT || 9000,
  staticPath: path.resolve(__dirname, localStaticPath)
};
