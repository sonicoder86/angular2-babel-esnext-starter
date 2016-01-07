'use strict';
let fs = require('fs');
let path = require('path');

exports.config = {
  baseUrl: 'http://localhost:9000/',
  framework: 'jasmine',

  seleniumServerJar: findSeleniumJar(),

  useAllAngular2AppRoots: true
};

function findSeleniumJar() {
  var dir = './node_modules/protractor/selenium';

  var files = fs.readdirSync(dir);
  var jar = files.filter(function (file) {
    return /\.jar$/.test(file);
  })[0];

  if (!jar) {
    console.error('Selenium Server JAR was not found. Run `npm run webdriver-update`.');
    process.exit(1);
  }

  return path.resolve(dir, jar);
}
