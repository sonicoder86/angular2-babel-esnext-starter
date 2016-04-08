import { Component, ChangeDetectionStrategy } from 'angular2/core';
import { ROUTER_DIRECTIVES } from 'angular2/router';
import template from './list.html';
import { PostService } from '../../services/post';
import { ListItemComponent } from './../list_item/list_item';

@Component({
  selector: 'list',
  template: template,
  directives: [ROUTER_DIRECTIVES, ListItemComponent],
  changeDetection: ChangeDetectionStrategy.Detached
})
export class ListComponent {
  constructor(postService: PostService) {
    this._postService = postService;
  }

  ngOnInit() {
    this._postService.refreshPosts();
  }

  getRemotePosts() {
    return this._postService.remotePosts;
  }
}
