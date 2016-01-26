'use strict';
import {ElementRef, DynamicComponentLoader} from 'angular2/core';
import {Router, RouterOutlet} from 'angular2/router';

export class LoggedInRouterOutlet extends RouterOutlet {
  publicRoutes = [
    '', 'login', 'signup', 'about'
  ];

  constructor(_elementRef: ElementRef, _loader: DynamicComponentLoader, _parentRouter: Router, name: string) {
    super(_elementRef, _loader, _parentRouter, name);

    this.parentRouter = _parentRouter;
  }

  activate(instruction) {
    //console.log(this.parentRouter._currentInstruction.urlPath);
    return super.activate(instruction);
  }
}
