import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

import { RequestService } from '../../../auth';

@Injectable()
export class PostService {
  remotePosts = new BehaviorSubject([]);

  constructor(http: Http, request: RequestService) {
    this._http = http;
    this._request = request;
  }

  treatTags(post) {
    if( post.tags && post.tags.length) {
       post.tags = post.tags.join(',');
    }
  }

  refreshPosts(category) {
    let url = !category ? '/posts' : '/posts/' + category;
    let postsResponse = this._http.get(url)
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
    this.treatTags(post);
    return this._http
      .post('/post', JSON.stringify(post), { headers: this._request.getAuthHeaders() })
      .map(res => res.json());
  }

  getPost(id) {
    return this._http.get(`/post/${id}`)
      .map(res => res.json());
  }
  
  getPostById(id) {
    return this._http.get(`/article/${id}`)
      .map(res => {
       let r = res.json();
       //treat the atgs
       r.tags = r.tags.split(',')
       return r
      });
  }
  
  updatePost(post) {
    this.treatTags(post);
    return this._http
      .post(`/post/${post._id}`, JSON.stringify(post), { headers: this._request.getAuthHeaders() })
      .map(res => res.json());
  }
}
