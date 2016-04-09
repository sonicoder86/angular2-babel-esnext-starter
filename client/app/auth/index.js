import { StorageService } from './services/storage';
import { RequestService } from './services/request';
import { UserService } from './services/user';

export const AUTH_PROVIDERS = [StorageService, RequestService, UserService];