'use strict';

let gulp = require('gulp');
let nodemon = require('gulp-nodemon');
let runSequence = require('run-sequence');
let del = require('del');

let clientCopyTask = require('./tasks/client_copy');
let clientBuildTask = require('./tasks/client_build');
let liveReloadTask = require('./tasks/livereload');

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

gulp.task('livereload', liveReloadTask());

gulp.task('client-copy', clientCopyTask(false, liveReloadTask.notifyChanged));

gulp.task('client-build', clientBuildTask(false, liveReloadTask.notifyChanged));

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
