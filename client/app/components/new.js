'use strict';
import {Component} from 'angular2/core';
import {FORM_DIRECTIVES, FormBuilder, Validators} from 'angular2/common';
import {Router} from 'angular2/router';
import newTemplate from './new.html';
import {PostService} from '../services/post';
import {validatorFactory} from '../plugins/validator';

@Component({
  selector: 'index',
  template: newTemplate,
  directives: [FORM_DIRECTIVES]
})
export class NewComponent {
  static get parameters() {
    return [[PostService], [FormBuilder], [Router]];
  }

  constructor(postService, builder, router) {
    this._postService = postService;
    this._router = router;

    this.postForm = builder.group({
      name: ['', Validators.required],
      website: ['', Validators.compose([Validators.required, validatorFactory('url')])],
      description: ['']
    });
  }

  onSubmit(post) {
    this._postService.addPost(post).subscribe(
      () => {
        this._router.navigate(['List']);
      },
      (error) => {
        console.error(error)
      }
    );
  }
}
