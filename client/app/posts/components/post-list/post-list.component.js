import { Component, ChangeDetectionStrategy } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router-deprecated';

import template from './post-list.template.html';
import { PostService } from '../../services/post/post.service';
import { PostListItemComponent } from '../post-list-item/post-list-item.component';

@Component({
  selector: 'post-list',
  template: template,
  directives: [ROUTER_DIRECTIVES, PostListItemComponent],
  changeDetection: ChangeDetectionStrategy.Detached
})
export class PostListComponent {
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
