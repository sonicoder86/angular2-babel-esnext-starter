'use strict';
let gulp = require('gulp');
let runSequence = require('run-sequence');

let clientCopyTask = require('./tasks/client_copy');
let clientBuildTask = require('./tasks/client_build');
let clientTestTask = require('./tasks/client_test');
let stylesheetTask = require('./tasks/stylesheet');
let liveReloadTask = require('./tasks/livereload');
let serverStartTasks = require('./tasks/server_start');
let serverCopyTask = require('./tasks/server_copy');
let generalCopyTask = require('./tasks/general_copy');
let cleanTask = require('./tasks/clean');
let eslintTask = require('./tasks/eslint');

gulp.task('server-start', serverStartTasks());
gulp.task('server-copy-dist', serverCopyTask());

gulp.task('general-copy-dist', generalCopyTask());

gulp.task('livereload', liveReloadTask());

gulp.task('client-copy', clientCopyTask(false, liveReloadTask.notifyChanged));
gulp.task('client-copy-dist', clientCopyTask(true));
gulp.task('client-build', clientBuildTask(false, liveReloadTask.notifyChanged));
gulp.task('client-build-dist', clientBuildTask(true));
gulp.task('client-test', clientTestTask(true));
gulp.task('client-test-dev', clientTestTask(false));
gulp.task('client-stylesheet', stylesheetTask(false));
gulp.task('client-stylesheet-dist', stylesheetTask(true));
gulp.task('client-style', eslintTask());

gulp.task('client-stylesheet-watch', function() {
  gulp.watch(['client/boot.less', 'client/**/*.less'], ['client-stylesheet']);
});

gulp.task('clean', cleanTask());

gulp.task('serve', function(done) {
  runSequence(
    'clean',
    ['client-build', 'client-copy', 'client-stylesheet', 'livereload', 'client-stylesheet-watch'],
    'server-start',
    done
  )
});

gulp.task('test', function(done) {
  runSequence(
    'client-test',
    'client-style',
    done
  )
});

gulp.task('test-dev', function(done) {
  runSequence(
    'client-test-dev',
    done
  )
});

gulp.task('dist', function(done) {
  runSequence(
    'clean',
    ['client-build-dist', 'client-copy-dist', 'client-stylesheet-dist', 'server-copy-dist', 'general-copy-dist'],
    done
  );
});
