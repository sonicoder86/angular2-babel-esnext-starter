import { Component, Inject } from '@angular/core'; // eslint-disable-line no-unused-vars
import { ROUTER_DIRECTIVES } from '@angular/router';

import template from './app.template.html';
import { MenuComponent } from '../menu/menu.component';

@Component({
  selector: 'my-app',
  directives: [ROUTER_DIRECTIVES, MenuComponent],
  template: template
})
export class AppComponent {

  constructor(@Inject('ENVIRONMENT') environment) {
    this.environment = environment;
  }
}
