import 'phantomjs-polyfill';
import './shim';
import 'zone.js/dist/jasmine-patch';

import { TEST_BROWSER_PLATFORM_PROVIDERS, TEST_BROWSER_APPLICATION_PROVIDERS } from 'angular2/platform/testing/browser';
import { setBaseTestProviders } from 'angular2/testing';
setBaseTestProviders(TEST_BROWSER_PLATFORM_PROVIDERS, TEST_BROWSER_APPLICATION_PROVIDERS);

import {
  afterEach, beforeEach, beforeEachProviders,
  describe, it, expect,
  inject, injectAsync,
  fakeAsync, tick
} from 'angular2/testing';

Object.assign(global, {
  afterEach, beforeEach, beforeEachProviders,
  describe, it, expect,
  inject, injectAsync,
  fakeAsync, tick
});

Error.stackTraceLimit = Infinity;

let testContext = require.context('./app', true, /\.spec\.js/);
testContext.keys().forEach(testContext);
