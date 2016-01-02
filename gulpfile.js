'use strict';
let gulp = require('gulp');
let runSequence = require('run-sequence');

let clientCopyTask = require('./tasks/client_copy');
let clientBuildTask = require('./tasks/client_build');
let liveReloadTask = require('./tasks/livereload');
let serverStartTask = require('./tasks/server_start');
let serverCopyTask = require('./tasks/server_copy');
let generalCopyTask = require('./tasks/general_copy');
let cleanTask = require('./tasks/clean');

gulp.task('server-start', serverStartTask());
gulp.task('server-copy-dist', serverCopyTask());

gulp.task('general-copy-dist', generalCopyTask());

gulp.task('livereload', liveReloadTask());

gulp.task('client-copy', clientCopyTask(false, liveReloadTask.notifyChanged));
gulp.task('client-copy-dist', clientCopyTask(true));
gulp.task('client-build', clientBuildTask(false, liveReloadTask.notifyChanged));
gulp.task('client-build-dist', clientBuildTask(true));

gulp.task('clean', cleanTask());

gulp.task('serve', function(callback) {
  runSequence(
    'clean',
    ['client-build', 'client-copy', 'livereload'],
    'server-start',
    callback
  )
});

gulp.task('dist', function(callback) {
  runSequence(
    'clean',
    ['client-build-dist', 'client-copy-dist', 'server-copy-dist', 'general-copy-dist'],
    callback
  )
});
