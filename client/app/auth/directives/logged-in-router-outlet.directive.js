import {
  ViewContainerRef,
  DynamicComponentLoader,
  Attribute, // eslint-disable-line no-unused-vars
  Directive
} from '@angular/core';
import { Router, RouterOutlet } from '@angular/router-deprecated';

import { UserService } from '../services/user/user.service';
import { BreadcrumbService } from '../services/breadcrumb/breadcrumb.service';
@Directive({
  selector: 'router-outlet'
})
export class LoggedInRouterOutletDirective extends RouterOutlet {
  publicRoutes = [
    '', 'login', 'signup', 'about', 'article', 'categories'
  ];

  constructor(
    containerRef: ViewContainerRef,
    componentLoader: DynamicComponentLoader,
    parentRouter: Router,
    @Attribute('name') name,
    userService: UserService,
    breadcrumbService: BreadcrumbService
  ) {
    super(containerRef, componentLoader, parentRouter, name, breadcrumbService);

    this.parentRouter = parentRouter;
    this.userService = userService;
    this.breadcrumbService = breadcrumbService;
  }

  activate(instruction) {
    //for article route must replace the /:id from string
    let urlPath = instruction.urlPath.replace(/\/(.+)/,'');
    if (this._canActivate(urlPath)) {
      this.breadcrumbService.saveLast(instruction.urlPath);
      return super.activate(instruction);
    }

    this.parentRouter.navigate(['Login']);
  }

  _canActivate(url) {    
    return this.publicRoutes.indexOf(url) !== -1 || this.userService.isLoggedIn();
  }
}
