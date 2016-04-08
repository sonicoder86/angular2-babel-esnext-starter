import { Component } from 'angular2/core';
import { Router } from 'angular2/router';
import template from './new.html';
import { PostService } from '../../services/post';
import { FormComponent } from './../form/form';

@Component({
  selector: 'new',
  template: template,
  directives: [FormComponent]
})
export class NewComponent {
  constructor(postService: PostService, router: Router) {
    this._postService = postService;
    this._router = router;
  }

  onSave(post) {
    this._postService.addPost(post).subscribe(
      () => {
        this._router.navigate(['List']);
      },
      (error) => {
        console.error(error);
      }
    );
  }
}
