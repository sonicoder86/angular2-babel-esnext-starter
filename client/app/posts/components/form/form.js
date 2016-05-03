import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, Validators } from '@angular/common';
import template from './form.html';
import { validatorFactory } from '../../validator';

@Component({
  selector: 'post-form',
  template: template
})
export class FormComponent {
  @Input()
  post;

  @Output()
  saved = new EventEmitter();

  constructor(builder: FormBuilder) {
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
