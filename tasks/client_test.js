'use strict';
let path = require('path');
let configPath = path.resolve(__dirname, './config/karma.js');

module.exports = function(singleRun) {
  return function(done) {
    let KarmaServer = require('karma').Server;

    let server = new KarmaServer({
      configFile: configPath,
      singleRun: singleRun,
      autoWatch: !singleRun
    }, function(result) {
      if (result > 0) {
        return done(new Error(`Karma exited with status code ${result}`));
      }

      done();
    });
    server.start();
  }
};
