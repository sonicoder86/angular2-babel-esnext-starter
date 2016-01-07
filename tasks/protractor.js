'use strict';
let gulp = require('gulp');
let path = require('path');
let protractor = require('gulp-protractor').protractor;
let configPath = path.resolve(__dirname, './config/protractor.js');

module.exports = function() {
  return function() {
    return gulp.src(['e2e/**/*.spec.js'])
      .pipe(protractor({
        configFile: configPath
      }));
  };
};