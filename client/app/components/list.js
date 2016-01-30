'use strict';
import {Component} from 'angular2/core';
import {ROUTER_DIRECTIVES} from 'angular2/router';
import indexTemplate from './list.html';
import {PostService} from '../services/post';

@Component({
  selector: 'index',
  template: indexTemplate,
  directives: [ROUTER_DIRECTIVES]
})
export class ListComponent {
  static get parameters() {
    return [[PostService]];
  }

  constructor(postService) {
    this._postService = postService;
    this._postService.refreshPosts();
  }

  getPosts() {
    return this._postService.posts;
  }
}