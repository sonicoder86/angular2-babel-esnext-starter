'use strict';
import {Component} from 'angular2/core';
import {RouteParams, Router} from 'angular2/router';
import template from './edit.html';
import {PostService} from '../../services/post';
import {FormComponent} from './form';

@Component({
  selector: 'edit',
  template: template,
  directives: [FormComponent]
})
export class EditComponent {
  static get parameters() {
    return [[PostService], [RouteParams], [Router]];
  }

  constructor(postService, params, router) {
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
