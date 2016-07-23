import { Component, EventEmitter, Input, Output } from '@angular/core';
import { REACTIVE_FORM_DIRECTIVES, FormBuilder, Validators } from '@angular/forms';

import template from './post-form.template.html';
import { validatorFactory } from '../../validator';

@Component({
  selector: 'post-form',
  template: template,
  directives: [REACTIVE_FORM_DIRECTIVES]
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
      this.postForm.controls['_id'].updateValue(change.post.currentValue._id);
      this.postForm.controls['name'].updateValue(change.post.currentValue.name);
      this.postForm.controls['website'].updateValue(change.post.currentValue.website);
      this.postForm.controls['description'].updateValue(change.post.currentValue.description);
    }
  }

  onSubmit(validPost) {
    this.saved.emit(validPost);
  }
}
