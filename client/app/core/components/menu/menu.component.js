import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Router } from '@angular/router';

import template from './menu.template.html';
import { UserService } from '../../../auth';

@Component({
  selector: 'top-menu',
  template: template,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MenuComponent {
  constructor(userService: UserService, router: Router) {
    this.userService = userService;
    this._router = router;
  }

  getLoggedIn() {
    return this.userService.getLoggedIn();
  }

  logout() {
    this.userService.logout();
    this._router.navigate(['']);
    return false;
  }
}
