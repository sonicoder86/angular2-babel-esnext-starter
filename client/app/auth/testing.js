import { Observable } from 'rxjs/Observable';
import { UserService } from './services/user/user.service';

class UserServiceMock {
  login() {
    return Observable.of(true);
  }

  logout() {}

  isLoggedIn() {
    return true;
  }

  getLoggedIn() {
    return Observable.of(true);
  }
}

const AUTH_TESTING_PROVIDERS = [
  { provide: UserService, useClass: UserServiceMock }
];

export {
  UserServiceMock,
  AUTH_TESTING_PROVIDERS
};
