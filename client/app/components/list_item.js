'use strict';
import {Component, ChangeDetectionStrategy, Input} from 'angular2/core';
import listItemTemplate from './list_item.html';

@Component({
  selector: 'list-item',
  template: listItemTemplate
})
export class ListItemComponent {
  @Input()
  post;
}