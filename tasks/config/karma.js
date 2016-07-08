'use strict';
let path = require('path');
let coverageEnabled = process.env.COVERAGE_ENABLED === 'true';

module.exports = function(config) {
  let webpackConfig = require('./webpack.test');
  let reporters = ['dots'];
  if (coverageEnabled) {
    reporters.push('coverage');
  }

  config.set({
    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: path.resolve(__dirname, '../../'),

    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['jasmine'],

    // list of files / patterns to load in the browser
    files: [
      { pattern: 'client/test.vendor.js' },
      { pattern: 'client/test.boot.js' },
      { pattern: 'client/css/*.css', included: false, served: true }
    ],

    proxies: {
      '/css/': '/base/client/css/'
    },

    // list of files to exclude
    exclude: [
    ],

    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
      'client/test.vendor.js': ['webpack', 'sourcemap'],
      'client/test.boot.js': ['webpack', 'sourcemap']
    },

    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: reporters,

    coverageReporter: {
      type: 'lcov',
      dir: 'coverage',
      subdir: '.'
    },

    webpack: webpackConfig,

    webpackServer: { noInfo: true },

    // web server port
    port: 9876,

    // enable / disable colors in the output (reporters and logs)
    colors: true,

    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,

    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['PhantomJS'],

    // Concurrency level
    // how many browser should be started simultanous
    concurrency: Infinity,

    autoWatch: false,
    singleRun: true
  });
};
