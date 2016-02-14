'use strict';
let eslint = require('gulp-eslint');
let gulp = require('gulp');
let config = require('./config').client;

module.exports = function() {
  return function() {
    return gulp.src(config.app)
      .pipe(eslint())
      .pipe(eslint.format())
      .pipe(eslint.failAfterError());
  };
};