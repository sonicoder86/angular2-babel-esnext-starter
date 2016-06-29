import { Component, ChangeDetectionStrategy } from '@angular/core';
import { ROUTER_DIRECTIVES, RouteParams } from '@angular/router-deprecated';

import template from './post-list.template.html';
import { PostService } from '../../services/post/post.service';
import { PostListItemComponent } from '../post-list-item/post-list-item.component';
import { UserService } from '../../../auth';
@Component({
  selector: 'post-list',
  template: template,
  directives: [ROUTER_DIRECTIVES, PostListItemComponent],
  changeDetection: ChangeDetectionStrategy.Detached
})
export class PostListComponent {
  constructor(postService: PostService, userService: UserService, params: RouteParams) {
    this._postService = postService;
    this._userService = userService;    
    this._params = params; 
    this._currentCategory = this._params.get('category') || 'Angular2';
  }

  ngOnInit() {
    this._postService.refreshPosts(this._currentCategory);
  }

  getRemotePosts() {
    return this._postService.remotePosts;
  }

  getLoggedIn() {
    return this._userService.getLoggedIn();
  }  
}
