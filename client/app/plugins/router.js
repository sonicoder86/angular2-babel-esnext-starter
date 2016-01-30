'use strict';
import {ElementRef, DynamicComponentLoader, AttributeMetadata} from 'angular2/core';
import {Router, RouterOutlet} from 'angular2/router';

export class LoggedInRouterOutlet extends RouterOutlet {
  publicRoutes = [
    '', 'login', 'signup', 'about'
  ];

  static get parameters() {
    return [[ElementRef], [DynamicComponentLoader], [Router], [new AttributeMetadata('name'), String]];
  }

  constructor(elementRef, componentLoader, parentRouter, name) {
    super(elementRef, componentLoader, parentRouter, name);

    this.parentRouter = parentRouter;
  }

  activate(instruction) {
    //console.log(this.parentRouter._currentInstruction.urlPath);
    return super.activate(instruction);
  }
}
