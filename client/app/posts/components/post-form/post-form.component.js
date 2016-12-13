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
  tagsFocused =false;
  constructor(builder: FormBuilder) {
    this._builder = builder;

    this.postForm = this._builder.group({
      _id: [''],
      name: ['', Validators.required],
      tags: [[], Validators.required],
      img: [''],
      description: ['', Validators.required],
      text: ['']
    });
  }

  ngOnChanges(change) {
    if (change.post && change.post.currentValue) {
      this.postForm.controls['_id'].setValue(change.post.currentValue._id);
      this.postForm.controls['name'].setValue(change.post.currentValue.name);
      this.postForm.controls['tags'].setValue(change.post.currentValue.tags);
      this.postForm.controls['img'].setValue(change.post.currentValue.img);
      this.postForm.controls['text'].setValue(change.post.currentValue.text);
      this.postForm.controls['description'].setValue(change.post.currentValue.description);
    }
  }

  onSubmit(post) {
    if(this.tagsFocused) return;
    this.saved.emit(post);
  }
}
