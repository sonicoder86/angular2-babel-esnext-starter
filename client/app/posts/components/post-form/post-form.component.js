import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

import template from './post-form.template.html';
import { validatorFactory } from '../../validator';

@Component({
  selector: 'post-form',
  template: template
})
export class PostFormComponent {
  @Input() post;

  @Output() saved = new EventEmitter();

  constructor(builder: FormBuilder) {
    this._builder = builder;

    this.postForm = this._builder.group({
      _id: [''],
      name: ['', Validators.required],
      website: ['', [Validators.required, validatorFactory('url')]],
      description: ['']
    });
  }

  ngOnChanges(change) {
    if (change.post && change.post.currentValue) {
      this.postForm.controls['_id'].setValue(change.post.currentValue._id);
      this.postForm.controls['name'].setValue(change.post.currentValue.name);
      this.postForm.controls['website'].setValue(change.post.currentValue.website);
      this.postForm.controls['description'].setValue(change.post.currentValue.description);
    }
  }

  onSubmit(validPost) {
    this.saved.emit(validPost);
  }
}
