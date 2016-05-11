import { StorageService } from './services/storage/storage.service';
import { RequestService } from './services/request/request.service';
import { UserService } from './services/user/user.service';
import { LoggedInRouterOutletDirective } from './directives/logged-in-router-outlet.directive';

const AUTH_PROVIDERS = [StorageService, RequestService, UserService];

export {
  StorageService,
  RequestService,
  UserService,
  LoggedInRouterOutletDirective,
  AUTH_PROVIDERS
};
