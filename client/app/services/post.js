'use strict';
import {Injectable} from 'angular2/core';
import {Http} from 'angular2/http';
import * as uuid from 'node-uuid';

@Injectable()
export class PostService {
  posts = [];

  static get parameters() {
    return [[Http]];
  }

  constructor(http) {
    this.http = http;

    this.addPost({
      name: 'Angular',
      url: 'https://angular.io/',
      description: 'Angular is a development platform for building mobile and desktop web applications.'
    });
    this.addPost({
      name: 'RxJs',
      url: 'http://reactivex.io/',
      description: 'Reactive Extensions (Rx) is a library for composing asynchronous and event-based programs using observable sequences and LINQ-style query operators.'
    });
    this.addPost({
      name: 'Babel',
      url: 'https://babeljs.io/',
      description: 'Babel is a compiler for writing next generation JavaScript.'
    });
  }

  refreshPosts() {
    console.log(this.http.get('/posts'));
  }

  addPost(post) {
    this.posts.push({
      _id: uuid.v4(),
      name: post.name,
      url: post.url,
      description: post.description
    });
  }
}
