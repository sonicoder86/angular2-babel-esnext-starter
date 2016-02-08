'use strict';
import {Component, ChangeDetectionStrategy, Input} from 'angular2/core';
import {ROUTER_DIRECTIVES} from 'angular2/router';
import template from './list_item.html';
import {ShortDescriptionPipe} from '../../pipes/short_description';

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
}