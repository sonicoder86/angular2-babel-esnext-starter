'use strict';
let path = require('path');

module.exports = {
  entry: {
    boot: './client/boot.js'
  },
  output: {
    path: path.resolve(__dirname, './build'),
    filename: '[name].js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
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
      }
    ]
  },

  resolve: {
    root: __dirname,
    extensions: ['','.js','.json']
  },

  devtool: 'source-map'
};
