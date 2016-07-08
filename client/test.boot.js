import 'rxjs/add/operator/map';
import 'rxjs/add/observable/of';
import {
  TEST_BROWSER_DYNAMIC_PLATFORM_PROVIDERS, TEST_BROWSER_DYNAMIC_APPLICATION_PROVIDERS
} from '@angular/platform-browser-dynamic/testing';
import {
  setBaseTestProviders,
  afterEach, beforeEach, beforeEachProviders,
  describe, it, expect,
  inject, async, tick
} from '@angular/core/testing';

setBaseTestProviders(TEST_BROWSER_DYNAMIC_PLATFORM_PROVIDERS, TEST_BROWSER_DYNAMIC_APPLICATION_PROVIDERS);

Object.assign(global, {
  afterEach, beforeEach, beforeEachProviders,
  describe, it, expect,
  inject, async, tick
});

let testContext = require.context('./app', true, /\.spec\.js/);
testContext.keys().forEach(testContext);
