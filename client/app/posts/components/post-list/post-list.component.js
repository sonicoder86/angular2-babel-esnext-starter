import { Component, ChangeDetectionStrategy } from '@angular/core';

import template from './post-list.template.html';
import { UserService } from '../../../auth';
import { PostService } from '../../services/post/post.service';

@Component({
  selector: 'post-list',
  template: template,
  changeDetection: ChangeDetectionStrategy.Detached
})
export class PostListComponent {
  constructor(postService: PostService, userService: UserService) {
    this._postService = postService;
    this.userService = userService;
  }

  ngOnInit() {
    this._postService.refreshPosts();
  }

  getRemotePosts() {
    return this._postService.remotePosts;
  }
}
