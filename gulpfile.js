'use strict';

let gulp = require('gulp');
let watch = require('gulp-watch');
let util = require('gulp-util');
let webpack = require('webpack');
let nodemon = require('gulp-nodemon');
let runSequence = require('run-sequence');
let del = require('del');
let miniLr = require('mini-lr');

let webPackConfig = require('./webpack.config');

let sourceFolder = 'client';
let source = 'client/**/*.html';
let destinationFolder = 'build';
let liveReload = miniLr();

function notifyChanged(files) {
  liveReload.changed({
    body: {
      files: files
    }
  });
}

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

gulp.task('livereload', function() {
  liveReload.listen(35729);
});

gulp.task('client-copy', function() {
  let clientWatch = watch(source, {base: sourceFolder, verbose: true});
  clientWatch.on('change', function(fileName) {
    notifyChanged([fileName]);
  });

  gulp.src(source, {base: sourceFolder})
    .pipe(clientWatch)
    .pipe(gulp.dest(destinationFolder));
});

gulp.task('client-build', function(callback) {
  let webpackBuild = webpack(webPackConfig);
  let firstRun = true;

  webpackBuild.watch({ aggregateTimeout: 100 }, function(err, stats) {
    if(err) {
      throw new util.PluginError("webpack:error", err);
    }

    let statistics = stats.toJson({
      children: false,
      source: false,
      modules: false,
      chunkModules: false
    });

    let elapsedTime = Math.round(statistics.time / 10) / 100;

    if (firstRun) {
      callback();
      firstRun = false;
    }
    else {
      util.log(`webpack:build ${elapsedTime} s`);

      notifyChanged(
        statistics.assets.map((file) => file.name)
      );
    }
  });
});

gulp.task('clean', function() {
  return del([destinationFolder]);
});

gulp.task('start', function(callback) {
  runSequence(
    'clean',
    ['client-build', 'client-copy', 'livereload'],
    'server-start',
    callback
  )
});
