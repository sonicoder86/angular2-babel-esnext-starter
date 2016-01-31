import {Component} from 'angular2/core';
import {RouteConfig, RouterOutlet, RouterLink} from 'angular2/router';
import appTemplate from './app.html';
import {ListComponent} from './components/list';
import {NewComponent} from './components/new';
import {AboutComponent} from './components/about';
import {LoggedInRouterOutlet} from './plugins/router';

import './footer.css';

@Component({
  selector: 'my-app',
  directives: [LoggedInRouterOutlet, RouterLink],
  template: appTemplate
})
@RouteConfig([
  { path: '/', component: ListComponent, as: 'List', useAsDefault: true },
  { path: '/new', component: NewComponent, as: 'New' },
  { path: '/about', component: AboutComponent, as: 'About' }
])
export class AppComponent {
}