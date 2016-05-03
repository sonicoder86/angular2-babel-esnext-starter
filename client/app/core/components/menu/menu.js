import { Component, ChangeDetectionStrategy } from '@angular/core';
import { ROUTER_DIRECTIVES, Router } from '@angular/router-deprecated';
import template from './menu.html';
import { UserService } from '../../../auth';

@Component({
  selector: 'top-menu',
  template: template,
  directives: [ROUTER_DIRECTIVES],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MenuComponent {
  static get parameters() {
    return [[UserService], [Router]];
  }

  constructor(userService, router) {
    this.userService = userService;
    this._router = router;
  }

  getLoggedIn() {
    return this.userService.getLoggedIn();
  }

  logout() {
    this.userService.logout();
    this._router.navigate(['List']);
    return false;
  }
}
