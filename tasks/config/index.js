'use strict';

module.exports = {
  client: {
    source: ['client/**/*.{html,css}', '!**/app/**', 'node_modules/bootstrap/dist/css/bootstrap.css'],
    destination: 'dist/client'
  },
  server: {
    source: ['server/**/*.{js,json}', '!server/**/*.spec.*'],
    destination: 'dist/server'
  },
  general: {
    source: ['package.json', 'Procfile'],
    destination: 'dist'
  },
  liveReload: {
    port: 35729
  },
  build: {
    destination: 'dist'
  }
};
