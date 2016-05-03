import { Component, InjectMetadata } from '@angular/core';
import { RouteConfig } from '@angular/router-deprecated';
import template from './app.html';
import { MenuComponent } from '../menu/menu';
import { LoggedInRouterOutlet } from '../../../auth';
import { router } from './router';
import { environment } from '../../index';

@Component({
  selector: 'my-app',
  directives: [LoggedInRouterOutlet, MenuComponent],
  template: template
})
@RouteConfig(router.config)
export class AppComponent {
  static get parameters() {
    return [[new InjectMetadata(environment)]];
  }

  constructor(env) {
    this.environment = env;
  }
}
