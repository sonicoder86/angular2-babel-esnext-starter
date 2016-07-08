import { Component } from '@angular/core';
import { Router } from '@angular/router';

import template from './post-new.template.html';
import { PostService } from '../../services/post/post.service';
import { PostFormComponent } from '../post-form/post-form.component';

@Component({
  selector: 'post-new',
  template: template,
  directives: [PostFormComponent]
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
