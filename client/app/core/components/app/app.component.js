import { Component, InjectMetadata } from '@angular/core';
import { RouteConfig } from '@angular/router-deprecated';

import template from './app.template.html';
import { MenuComponent } from '../menu/menu.component';
import { LoggedInRouterOutletDirective } from '../../../auth';
import { routes } from './router.config';

@Component({
  selector: 'my-app',
  directives: [LoggedInRouterOutletDirective, MenuComponent],
  template: template
})
@RouteConfig(routes)
export class AppComponent {
  static get parameters() {
    return [[new InjectMetadata('ENVIRONMENT')]];
  }

  constructor(env) {
    this.environment = env;
  }
}
