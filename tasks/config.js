'use strict';

module.exports = {
  client: {
    source: ['client/**/*.{html,css}', '!**/app/**'],
    destination: 'build'
  },
  liveReload: {
    port: 35729
  }
};
