'use strict';
import {Component, ChangeDetectionStrategy, Input} from 'angular2/core';
import template from './list_item.html';

@Component({
  selector: 'list-item',
  template: template,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ListItemComponent {
  @Input()
  post;
}