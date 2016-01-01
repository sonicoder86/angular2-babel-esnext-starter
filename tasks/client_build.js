'use strict';
let gulp = require('gulp');
let webpack = require('webpack');
let util = require('gulp-util');
let config = require('./config').client;
let webPackConfig = require('../webpack.config');
let webPackConfigDist = require('../webpack.config.dist');

module.exports = function(singleRun, callback) {
  return function(cb) {
    let webpackBuild = webpack(webPackConfig);
    let firstRun = true;

    let callbackOnBuild = function(err, stats) {
      if (err) {
        throw new util.PluginError("webpack:error", err);
      }

      let statistics = stats.toJson({
        children: false,
        source: false,
        modules: false,
        chunkModules: false
      });

      let elapsedTime = Math.round(statistics.time / 10) / 100;

      if (singleRun) {
        cb();
      }
      else {
        if (firstRun) {
          cb();
          firstRun = false;
        }
        else {
          util.log(`webpack:build ${elapsedTime} s`);

          callback(
            statistics.assets.map((file) => file.name)
          );
        }
      }
    };

    if (singleRun) {
      webpackBuild.run(callbackOnBuild);
    }
    else {
      webpackBuild.watch({ aggregateTimeout: 100 }, callbackOnBuild);
    }
  }
};
