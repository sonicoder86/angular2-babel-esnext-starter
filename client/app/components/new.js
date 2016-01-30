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

  static get parameters() {
    return [[PostService]];
  }

  constructor(postService) {
    this._postService = postService;
  }

  onSubmit() {
    console.log(this.post);
    this.submitted = true;
  }

  get diagnostic() { return JSON.stringify(this.post); }
}
