'use strict';
import {Injectable} from 'angular2/core';
import {Http} from 'angular2/http';
import {BehaviorSubject} from 'rxjs';
import * as uuid from 'node-uuid';

@Injectable()
export class PostService {
  posts = [];

  static get parameters() {
    return [[Http]];
  }

  constructor(http) {
    this._http = http;
    this.remotePosts = new BehaviorSubject([]);
  }

  refreshPosts() {
    this._http.get('/posts')
      .map(res => res.json())
      .subscribe(
        (posts) => {
          this.remotePosts.next(posts);
        },
        (error) => {
          console.error(error);
        }
      );
  }

  addPost(post) {
    this.posts.push({
      _id: uuid.v4(),
      name: post.name,
      website: post.url,
      description: post.description
    });
  }
}
