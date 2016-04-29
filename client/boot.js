import './shim';
import 'rxjs/add/operator/map';
import { bootstrap } from 'angular2/platform/browser';
import { enableProdMode, provide } from 'angular2/core';
import { TRANSLATE_PROVIDERS } from 'ng2-translate/ng2-translate';
import { AppComponent } from './app/core/components/app/app';
import { ROUTER_PROVIDERS } from 'angular2/router';
import { HashLocationStrategy, LocationStrategy } from 'angular2/platform/common';
import { HTTP_PROVIDERS } from 'angular2/http';
import { AUTH_PROVIDERS } from './app/auth';
import { POSTS_PROVIDERS } from './app/posts';
import { environment } from './app/core';

if (ENVIRONMENT === 'production') {
  enableProdMode();
}

bootstrap(AppComponent, [
  HTTP_PROVIDERS,
  ROUTER_PROVIDERS,
  TRANSLATE_PROVIDERS,
  AUTH_PROVIDERS,
  POSTS_PROVIDERS,
  provide(LocationStrategy, { useClass: HashLocationStrategy }),
  provide(environment, { useValue: ENVIRONMENT })
]);
