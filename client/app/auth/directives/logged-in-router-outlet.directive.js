import { ViewContainerRef, DynamicComponentLoader, AttributeMetadata, Directive } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router-deprecated';

import { UserService } from '../services/user.service';

@Directive({
  selector: 'router-outlet'
})
export class LoggedInRouterOutletDirective extends RouterOutlet {
  publicRoutes = [
    '', 'login', 'signup', 'about'
  ];

  static get parameters() {
    return [
      [ViewContainerRef],
      [DynamicComponentLoader],
      [Router],
      [new AttributeMetadata('name'), String],
      [UserService]
    ];
  }

  constructor(containerRef, componentLoader, parentRouter, name, userService) {
    super(containerRef, componentLoader, parentRouter, name);

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
