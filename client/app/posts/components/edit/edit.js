import { Component } from '@angular/core';
import { RouteParams, Router } from '@angular/router-deprecated';
import template from './edit.html';
import { PostService } from '../../services/post';
import { FormComponent } from './../form/form';

@Component({
  selector: 'edit',
  template: template,
  directives: [FormComponent]
})
export class EditComponent {
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
