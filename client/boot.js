import './shim';
import 'rxjs/Rx';
import { bootstrap } from 'angular2/platform/browser';
import { enableProdMode, provide } from 'angular2/core';
import { TRANSLATE_PROVIDERS } from 'ng2-translate/ng2-translate';
import { AppComponent } from './app/core/components/app/app';
import { ROUTER_PROVIDERS, LocationStrategy, HashLocationStrategy } from 'angular2/router';
import { HTTP_PROVIDERS } from 'angular2/http';
import { PostService } from './app/posts/services/post';
import { UserService } from './app/auth/services/user';

if (ENVIRONMENT === 'production') {
  enableProdMode();
}

bootstrap(AppComponent, [
  HTTP_PROVIDERS,
  ROUTER_PROVIDERS,
  TRANSLATE_PROVIDERS,
  provide(LocationStrategy, { useClass: HashLocationStrategy }),
  PostService, UserService
]);
