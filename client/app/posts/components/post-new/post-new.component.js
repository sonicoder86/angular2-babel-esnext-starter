import { Component } from '@angular/core';
import { Router } from '@angular/router';

import template from './post-new.template.html';
import { PostService } from '../../services/post/post.service';

@Component({
  selector: 'post-new',
  template: template
})
export class PostNewComponent {
  constructor(postService: PostService, router: Router) {
    this._postService = postService;
    this._router = router;
  }

  onSave(post) {
    this._postService.addPost(post).subscribe(
      () => {
        this._router.navigate(['']);
      },
      (error) => {
        console.error(error);
      }
    );
  }
}
