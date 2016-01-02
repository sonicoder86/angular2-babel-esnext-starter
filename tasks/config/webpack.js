'use strict';
let path = require('path');
let config = require('./index').client;

module.exports = {
  entry: {
    boot: './client/boot.js'
  },
  output: {
    path: path.resolve(__dirname, '../../', config.destination),
    filename: '[name].js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel',
        exclude: /node_modules/,
        query: {
          presets: ['es2015'],
          plugins: [
            'angular2-annotations',
            'transform-decorators-legacy',
            'transform-class-properties',
            'transform-flow-strip-types'
          ]
        }
      },
      {
        test: /\.html$/,
        loader: "html?minimize=false"
      }
    ]
  },

  resolve: {
    root: __dirname,
    extensions: ['','.js','.json']
  },

  devtool: 'source-map'
};
