'use strict';
let gulp = require('gulp');
let config = require('./config').general;

module.exports = function() {
  return function() {
    return gulp.src(config.source)
      .pipe(gulp.dest(config.destination));
  }
};
