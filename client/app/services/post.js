'use strict';
import {Injectable} from 'angular2/core';
import {Http, Headers} from 'angular2/http';
import {BehaviorSubject} from 'rxjs';

@Injectable()
export class PostService {
  remotePosts = new BehaviorSubject([]);

  static get parameters() {
    return [[Http]];
  }

  constructor(http) {
    this._http = http;
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
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');

    return this._http
      .post('/post', JSON.stringify(post), {headers: headers})
      .map(res => res.json());
  }
}
