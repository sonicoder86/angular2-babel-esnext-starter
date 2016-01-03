'use strict';
import 'phantomjs-polyfill';
import 'es6-shim';
import 'reflect-metadata';
import 'zone.js/lib/browser/zone-microtask';
import 'zone.js/lib/jasmine/patch';

import {
  afterEach,
  beforeEach,
  beforeEachProviders,
  describe,
  expect,
  inject,
  it
} from 'angular2/testing_internal';

global.expect = expect;
global.inject = inject;
global.describe = describe;
global.it = it;
global.beforeEach = beforeEach;
global.beforeEachProviders = beforeEachProviders;
global.afterEach = afterEach;

let testContext = require.context('./app', true, /\.spec\.js/);
testContext.keys().forEach(testContext);

let domAdapter = require('angular2/src/platform/browser/browser_adapter');
domAdapter.BrowserDomAdapter.makeCurrent();
