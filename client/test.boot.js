import 'rxjs/add/operator/map';
import 'rxjs/add/observable/of';
import {
  TEST_BROWSER_DYNAMIC_PLATFORM_PROVIDERS, TEST_BROWSER_DYNAMIC_APPLICATION_PROVIDERS
} from '@angular/platform-browser-dynamic/testing';
import { setBaseTestProviders, addProviders, inject } from '@angular/core/testing';

setBaseTestProviders(TEST_BROWSER_DYNAMIC_PLATFORM_PROVIDERS, TEST_BROWSER_DYNAMIC_APPLICATION_PROVIDERS);

Object.assign(global, { addProviders, inject });

let testContext = require.context('./app', true, /\.spec\.js/);
testContext.keys().forEach(testContext);
