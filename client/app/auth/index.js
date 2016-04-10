import { StorageService } from './services/storage';
import { RequestService } from './services/request';
import { UserService } from './services/user';
import { LoggedInRouterOutlet } from './directives/router_outlet';

const AUTH_PROVIDERS = [StorageService, RequestService, UserService];

export {
  StorageService,
  RequestService,
  UserService,
  LoggedInRouterOutlet,
  AUTH_PROVIDERS
};
