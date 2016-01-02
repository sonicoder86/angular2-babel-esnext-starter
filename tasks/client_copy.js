'use strict';
let gulp = require('gulp');
let watch = require('gulp-watch');
let deleteLines = require('gulp-delete-lines');
let config = require('./config').client;

module.exports = function(singleRun, callback) {
  return function() {
    let gulpStream = gulp.src(config.source);

    if (!singleRun) {
      let clientWatch = watch(config.source, {verbose: true});

      if (callback) {
        clientWatch.on('change', function(fileName) {
          callback([fileName]);
        });
      }

      gulpStream.pipe(clientWatch);
    }
    else {
      gulpStream.pipe(deleteLines({
        'filters': [
          /livereload/i
        ]
      }));
    }

    return gulpStream.pipe(gulp.dest(config.destination));
  }
};
