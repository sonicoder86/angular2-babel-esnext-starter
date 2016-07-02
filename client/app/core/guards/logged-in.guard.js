import { Injectable } from '@angular/core';

import { UserService } from '../../auth';

@Injectable()
export class LoggedInGuard {
  constructor(user: UserService) {
    this._user = user;
  }

  canActivate() {
    return this._user.isLoggedIn();
  }
}
