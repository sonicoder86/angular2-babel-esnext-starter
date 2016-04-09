import { ElementRef, DynamicComponentLoader, AttributeMetadata, Directive } from 'angular2/core';
import { Router, RouterOutlet } from 'angular2/router';
import { UserService } from '../services/user';

@Directive({
  selector: 'router-outlet'
})
export class LoggedInRouterOutlet extends RouterOutlet {
  publicRoutes = [
    '', 'login', 'signup', 'about'
  ];

  static get parameters() {
    return [[ElementRef], [DynamicComponentLoader], [Router], [new AttributeMetadata('name'), String], [UserService]];
  }

  constructor(elementRef, componentLoader, parentRouter, name, userService) {
    super(elementRef, componentLoader, parentRouter, name);

    this.parentRouter = parentRouter;
    this.userService = userService;
  }

  activate(instruction) {
    if (this._canActivate(instruction.urlPath)) {
      return super.activate(instruction);
    }

    this.parentRouter.navigate(['Login']);
  }

  _canActivate(url) {
    return this.publicRoutes.indexOf(url) !== -1 || this.userService.isLoggedIn();
  }
}
