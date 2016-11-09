import { StorageService } from './services/storage/storage.service';
import { RequestService } from './services/request/request.service';
import { UserService } from './services/user/user.service';
import { BreadcrumbService } from './services/breadcrumb/breadcrumb.service';

const AUTH_PROVIDERS = [StorageService, RequestService, UserService, BreadcrumbService];

export {
  StorageService,
  RequestService,
  UserService,
  BreadcrumbService,
  AUTH_PROVIDERS
};
