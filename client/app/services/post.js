import { Injectable } from 'angular2/core';
import { Http } from 'angular2/http';
import { BehaviorSubject } from 'rxjs';
import { request } from '../plugins/request';

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
    let postsResponse = this._http.get('/posts')
      .map(res => res.json());

    postsResponse.subscribe(
        (posts) => {
          this.remotePosts.next(posts);
        },
        (error) => {
          console.error(error);
        }
      );

    return postsResponse;
  }

  addPost(post) {
    return this._http
      .post('/post', JSON.stringify(post), { headers: request.getAuthHeaders() })
      .map(res => res.json());
  }

  getPost(id) {
    return this._http.get(`/post/${id}`)
      .map(res => res.json());
  }

  updatePost(post) {
    return this._http
      .post(`/post/${post._id}`, JSON.stringify(post), { headers: request.getAuthHeaders() })
      .map(res => res.json());
  }
}
