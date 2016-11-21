import { Component, ChangeDetectionStrategy } from '@angular/core';
import { ROUTER_DIRECTIVES, ActivatedRoute } from '@angular/router';

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
  constructor(postService: PostService, userService: UserService, route: ActivatedRoute/*, params: RouteParams*/) {
    this._postService = postService;
    this._userService = userService;
    this._route = route;   
  }

  ngOnInit() {
    this._route.params.subscribe(params => {
       this._currentCategory = params['category'] || 'Angular2';;
       this._postService.refreshPosts(this._currentCategory);   
    });
    
  }

  getRemotePosts() {
    return this._postService.remotePosts;
  }

  getLoggedIn() {
    return this._userService.getLoggedIn();
  }  
}
