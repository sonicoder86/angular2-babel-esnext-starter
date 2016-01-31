'use strict';
import {Component, ChangeDetectionStrategy, Input} from 'angular2/core';
import {ROUTER_DIRECTIVES} from 'angular2/router';
import indexTemplate from './list.html';
import {PostService} from '../services/post';
import {ListItemComponent} from './list_item';

@Component({
  selector: 'index',
  template: indexTemplate,
  directives: [ROUTER_DIRECTIVES, ListItemComponent],
  changeDetection: ChangeDetectionStrategy.Detached
})
export class ListComponent {
  static get parameters() {
    return [[PostService]];
  }

  constructor(postService) {
    this._postService = postService;
  }

  ngOnInit() {
    this._postService.refreshPosts();
  }

  getPosts() {
    return this._postService.posts;
  }

  getRemotePosts() {
    return this._postService.remotePosts;
  }
}