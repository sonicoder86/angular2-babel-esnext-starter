import 'phantomjs-polyfill';
import './shim';
import 'zone.js/dist/jasmine-patch';
import 'zone.js/dist/async-test';

import {
  TEST_BROWSER_PLATFORM_PROVIDERS, TEST_BROWSER_APPLICATION_PROVIDERS
} from 'angular2/platform/testing/browser';
import {
  setBaseTestProviders,
  afterEach, beforeEach, beforeEachProviders,
  describe, it, expect,
  inject, injectAsync,
  async, tick
} from 'angular2/testing';

setBaseTestProviders(TEST_BROWSER_PLATFORM_PROVIDERS, TEST_BROWSER_APPLICATION_PROVIDERS);

Object.assign(global, {
  afterEach, beforeEach, beforeEachProviders,
  describe, it, expect,
  inject, injectAsync,
  async, tick
});

Error.stackTraceLimit = Infinity;

let testContext = require.context('./app', true, /\.spec\.js/);
testContext.keys().forEach(testContext);
