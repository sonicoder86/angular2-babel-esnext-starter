import { Component, InjectMetadata, Inject } from '@angular/core';
import { RouteConfig } from '@angular/router-deprecated';

import template from './app.template.html';
import { MenuComponent } from '../menu/menu.component';
import { LoggedInRouterOutletDirective } from '../../../auth';
import { router } from './router.config';

@Component({
  selector: 'my-app',
  directives: [LoggedInRouterOutletDirective, MenuComponent],
  template: template
})
@RouteConfig(router.config)
export class AppComponent {
  static get parameters() {
    return [[new InjectMetadata('ENVIRONMENT')]];
  }

  constructor(env) {
    this.environment = env;
  }
}
