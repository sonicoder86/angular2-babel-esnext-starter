import { StorageService } from './services/storage.service';
import { RequestService } from './services/request.service';
import { UserService } from './services/user.service';
import { LoggedInRouterOutletDirective } from './directives/logged-in-router-outlet.directive.js';

const AUTH_PROVIDERS = [StorageService, RequestService, UserService];

export {
  StorageService,
  RequestService,
  UserService,
  LoggedInRouterOutletDirective,
  AUTH_PROVIDERS
};
