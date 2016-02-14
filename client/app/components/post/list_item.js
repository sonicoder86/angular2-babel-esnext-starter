import { Component, ChangeDetectionStrategy } from 'angular2/core';
import { ROUTER_DIRECTIVES } from 'angular2/router';
import template from './list_item.html';
import { ShortDescriptionPipe } from '../../pipes/short_description';
import { UserService } from '../../services/user';

@Component({
  selector: 'list-item',
  template: template,
  changeDetection: ChangeDetectionStrategy.OnPush,
  directives: [ROUTER_DIRECTIVES],
  pipes: [ShortDescriptionPipe],
  inputs: ['post']
})
export class ListItemComponent {
  post;

  static get parameters() {
    return [[UserService]];
  }

  constructor(userService) {
    this.userService = userService;
  }

  getLoggedIn() {
    return this.userService.getLoggedIn();
  }
}
