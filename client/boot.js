import './shim';
import 'rxjs/add/operator/map';
import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode, provide } from '@angular/core';
import { AppComponent } from './app/core/components/app/app';
import { ROUTER_PROVIDERS } from '@angular/router-deprecated';
import { FORM_PROVIDERS, LocationStrategy, HashLocationStrategy } from '@angular/common';
import { HTTP_PROVIDERS } from '@angular/http';
import { AUTH_PROVIDERS } from './app/auth';
import { POSTS_PROVIDERS } from './app/posts';
import { environment } from './app/core';

if (ENVIRONMENT === 'production') {
  enableProdMode();
}

bootstrap(AppComponent, [
  FORM_PROVIDERS,
  HTTP_PROVIDERS,
  ROUTER_PROVIDERS,
  AUTH_PROVIDERS,
  POSTS_PROVIDERS,
  provide(LocationStrategy, { useClass: HashLocationStrategy }),
  provide(environment, { useValue: ENVIRONMENT })
]);
