'use strict';
import {Injectable} from 'angular2/core';
import {Http} from 'angular2/http';
import {BehaviorSubject} from 'rxjs';
import {request} from '../plugins/request';

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
    return this._http
      .post('/post', JSON.stringify(post), {headers: request.getAuthHeaders()})
      .map(res => res.json());
  }
}
