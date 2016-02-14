import 'phantomjs-polyfill';
import 'es6-shim';
import 'reflect-metadata';
import 'zone.js/dist/zone-microtask';
import 'zone.js/dist/jasmine-patch';

import { TEST_BROWSER_PLATFORM_PROVIDERS, TEST_BROWSER_APPLICATION_PROVIDERS } from 'angular2/platform/testing/browser';
import { setBaseTestProviders } from 'angular2/testing';
setBaseTestProviders(TEST_BROWSER_PLATFORM_PROVIDERS, TEST_BROWSER_APPLICATION_PROVIDERS);

import {
  afterEach,
  beforeEach,
  beforeEachProviders,
  describe,
  expect,
  inject,
  injectAsync,
  it
} from 'angular2/testing';

global.expect = expect;
global.inject = inject;
global.injectAsync = injectAsync;
global.describe = describe;
global.it = it;
global.beforeEach = beforeEach;
global.beforeEachProviders = beforeEachProviders;
global.afterEach = afterEach;

let testContext = require.context('./app', true, /\.spec\.js/);
testContext.keys().forEach(testContext);
