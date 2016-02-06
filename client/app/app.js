import {Component} from 'angular2/core';
import {RouteConfig} from 'angular2/router';
import template from './app.html';
import {MenuComponent} from './components/menu';
import {LoggedInRouterOutlet} from './plugins/router';
import {router} from './router';

import './footer.css';

@Component({
  selector: 'my-app',
  directives: [LoggedInRouterOutlet, MenuComponent],
  template: template
})
@RouteConfig(router.config)
export class AppComponent { }
