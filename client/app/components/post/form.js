'use strict';
import {Component, EventEmitter} from 'angular2/core';
import {FORM_DIRECTIVES, FormBuilder, Validators} from 'angular2/common';
import template from './form.html';
import {validatorFactory} from '../../plugins/validator';

@Component({
  selector: 'post-form',
  template: template,
  inputs: ['post'],
  outputs: ['saved']
})
export class FormComponent {
  post;

  saved = new EventEmitter();

  static get parameters() {
    return [[FormBuilder]];
  }

  constructor(builder) {
    this.postForm = builder.group({
      _id: [''],
      name: ['', Validators.required],
      website: ['', Validators.compose([Validators.required, validatorFactory('url')])],
      description: ['']
    });
  }

  ngOnChanges(change) {
    if (change.post && change.post.currentValue) {
      this.postForm.controls['_id'].updateValue(change.post.currentValue._id);
      this.postForm.controls['name'].updateValue(change.post.currentValue.name);
      this.postForm.controls['website'].updateValue(change.post.currentValue.website);
      this.postForm.controls['description'].updateValue(change.post.currentValue.description);
    }
  }

  onSubmit(post) {
    this.saved.emit(post);
  }
}
