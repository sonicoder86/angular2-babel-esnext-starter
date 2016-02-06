'use strict';
import {ElementRef, DynamicComponentLoader, AttributeMetadata} from 'angular2/core';
import {Router, RouterOutlet} from 'angular2/router';
import {UserService} from '../services/user';

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
    let currentUrl = this.parentRouter._currentInstruction.urlPath;
    if (this.publicRoutes.indexOf(currentUrl) === -1 && !this.userService.isLoggedIn()) {
      this.parentRouter.navigate(['Login']);
    }

    return super.activate(instruction);
  }
}
