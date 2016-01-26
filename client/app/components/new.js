'use strict';
import {Component} from 'angular2/core';
import {NgForm} from 'angular2/common';
import newTemplate from './new.html';
import {PostService} from '../services/post';

@Component({
  selector: 'index',
  template: newTemplate
})
export class NewComponent {
  submitted = false;

  post = {
    name: '',
    url: '',
    description: ''
  };

  constructor(postService: PostService) {
    this._postService = postService;
  }

  onSubmit() {
    this.submitted = true;
  }

  get diagnostic() { return JSON.stringify(this.post); }
}
