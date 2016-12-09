'use strict';
let nodemon = require('gulp-nodemon');

module.exports = function() {
  return function () {
    return nodemon({
      script: 'mock-server/index.js',
      watch: ['mock-server'],
      ignore: ['node_modules/**'],
      ext: 'js html',
      env: {
        'NODE_ENV': 'development'
      }
    });
  };
};
