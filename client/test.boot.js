import 'rxjs/add/operator/map';
import 'rxjs/add/observable/of';
import { TestBed } from '@angular/core/testing';
import { BrowserDynamicTestingModule, platformBrowserDynamicTesting } from '@angular/platform-browser-dynamic/testing';

TestBed.initTestEnvironment(
  BrowserDynamicTestingModule,
  platformBrowserDynamicTesting()
);

let testContext = require.context('./app', true, /\.spec\.js/);
testContext.keys().forEach(testContext);
