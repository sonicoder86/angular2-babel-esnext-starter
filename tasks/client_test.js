'use strict';
let path = require('path');
let KarmaServer = require('karma').Server;
let configPath = path.resolve(__dirname, './config/karma.js');

module.exports = function(singleRun) {
  return function(done) {
    let KarmaServer = require('karma').Server;

    let server = new KarmaServer({
      configFile: configPath,
      singleRun: singleRun,
      autoWatch: !singleRun
    }, done);
    server.start();
  }
};
