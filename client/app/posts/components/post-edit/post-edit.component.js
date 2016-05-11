import { Component } from '@angular/core';
import { RouteParams, Router } from '@angular/router-deprecated';
import template from './post-edit.template.html';
import { PostService } from '../../services/post.service';
import { PostFormComponent } from './../post-form/post-form.component';

@Component({
  selector: 'post-edit',
  template: template,
  directives: [PostFormComponent]
})
export class PostEditComponent {
  constructor(postService: PostService, params: RouteParams, router: Router) {
    this._postService = postService;
    this._params = params;
    this._router = router;
  }

  ngOnInit() {
    this.post = this._postService
      .getPost(this._params.get('id'));
  }

  onSave(post) {
    this._postService.updatePost(post).subscribe(
      () => {
        this._router.navigate(['List']);
      },
      (err) => {
        console.error(err);
      }
    );
  }
}
