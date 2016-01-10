import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import appTemplate from './app.html';
import {HelloComponent} from './components/hello';
import {AboutComponent} from './components/about';
import helloTemplate from './components/hello.html';

@Component({
  selector: 'my-app',
  directives: [ROUTER_DIRECTIVES],
  template: appTemplate
})
@RouteConfig([
  { path: '/', component: HelloComponent, as: 'Hello' },
  { path: '/about', component: AboutComponent, as: 'About' }
])
export class AppComponent {
}