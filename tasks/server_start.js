'use strict';
let nodemon = require('gulp-nodemon');
let util = require('gulp-util');
let server;

module.exports = {
  start: function() {
    return function (done) {
      server = nodemon({
        script: 'server/index.js',
        watch: ['server'],
        ignore: ['node_modules/**'],
        ext: 'js html',
        env: {
          'NODE_ENV': 'development'
        },
        verbose: true
      });

      server
        .once('start', function() {
          done();
        });
    };
  },

  stop: function() {
    return function () {
      if (!server) {
        throw new util.PluginError("nodemon:error", new Error("Server should be started first"));
      }

      global.setTimeout(function() {
        server.emit('quit');
        global.setTimeout(function() {
          process.exit(0);
        }, 100);
      }, 1000);
    }
  }
};
