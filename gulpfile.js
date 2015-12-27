'use strict';

let gulp = require('gulp');
let watch = require('gulp-watch');
let util = require('gulp-util');
let webpack = require('webpack');
let nodemon = require('gulp-nodemon');
let runSequence = require('run-sequence');
let del = require('del');

let webPackConfig = require('./webpack.config');

let sourceFolder = 'client';
let source = 'client/**/*.html';
let destinationFolder = 'build';

gulp.task('server-start', function () {
  return nodemon({
    script: 'server/index.js',
    watch: ['server'],
    ignore: ['node_modules/**'],
    ext: 'js html',
    env: {
      'NODE_ENV': 'development'
    }
  });
});

gulp.task('client-copy', function() {
  gulp.src(source, {base: sourceFolder})
    .pipe(watch(source, {base: sourceFolder, verbose: true}))
    .pipe(gulp.dest(destinationFolder));
});

gulp.task('client-build', function(callback) {
  let webpackBuild = webpack(webPackConfig);
  let firstRun = true;

  webpackBuild.watch({ aggregateTimeout: 100 }, function(err, stats) {
    if(err) {
      throw new util.PluginError("webpack:error", err);
    }

    if (firstRun) {
      callback();
      firstRun = false;
    }
    else {
      util.log('webpack:build');
    }
  });
});

gulp.task('clean', function() {
  return del([destinationFolder]);
});

gulp.task('start', function(callback) {
  runSequence(
    'clean',
    ['client-build', 'client-copy'],
    'server-start',
    callback
  )
});