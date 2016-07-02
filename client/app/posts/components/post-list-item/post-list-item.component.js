import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

import template from './post-list-item.template.html';
import { ShortDescriptionPipe } from '../../pipes/short-description.pipe';
import { UserService } from '../../../auth';
import { ClickCounterDirective } from '../../directives/click-counter.directive';

@Component({
  selector: 'post-list-item',
  template: template,
  changeDetection: ChangeDetectionStrategy.OnPush,
  directives: [ROUTER_DIRECTIVES, ClickCounterDirective],
  pipes: [ShortDescriptionPipe]
})
export class PostListItemComponent {
  @Input() post;

  constructor(userService: UserService) {
    this.userService = userService;
  }

  getLoggedIn() {
    return this.userService.getLoggedIn();
  }
}
