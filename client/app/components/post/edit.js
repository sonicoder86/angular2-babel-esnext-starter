'use strict';
import {Component} from 'angular2/core';
import {RouteParams} from 'angular2/router';
import template from './edit.html';
import {PostService} from '../../services/post';

@Component({
  selector: 'edit',
  template: template
})
export class EditComponent {
  static get parameters() {
    return [[PostService], [RouteParams]];
  }

  constructor(postService, params) {
    this._postService = postService;
    this._params = params;
  }
}
