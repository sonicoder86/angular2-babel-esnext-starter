import { StorageService } from './services/storage/storage.service';
import { RequestService } from './services/request/request.service';
import { UserService } from './services/user/user.service';

const AUTH_PROVIDERS = [StorageService, RequestService, UserService];

export {
  StorageService,
  RequestService,
  UserService,
  AUTH_PROVIDERS
};
