import 'es6-shim';
import 'reflect-metadata';
import 'zone.js/dist/zone-microtask';
import 'rxjs/Rx';
import { bootstrap } from 'angular2/platform/browser';
import { enableProdMode, provide } from 'angular2/core';
import { AppComponent } from './app/app';
import { ROUTER_PROVIDERS, LocationStrategy, HashLocationStrategy } from 'angular2/router';
import { HTTP_PROVIDERS } from 'angular2/http';
import { PostService } from './app/services/post';
import { UserService } from './app/services/user';

if (ENVIRONMENT === 'production') {
  enableProdMode();
}

bootstrap(AppComponent, [
  HTTP_PROVIDERS,
  ROUTER_PROVIDERS,
  provide(LocationStrategy, { useClass: HashLocationStrategy }),
  PostService, UserService
]);
