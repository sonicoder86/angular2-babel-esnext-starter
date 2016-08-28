import { TestBed, inject } from '@angular/core/testing';
import { MockBackend } from '@angular/http/testing';
import { RequestMethod, Headers } from '@angular/http';
import { Http, BaseRequestOptions, Response, ResponseOptions } from '@angular/http';

import { PostService } from './post.service';

import { AUTH_PROVIDERS, RequestService } from '../../../auth';

describe('PostService', () => {
  let service;
  let backend;
  let singlePost = { _id: 'asdgre', name: 'Angular', website: 'http://angular.io' };
  let postsResponse = [singlePost];

  function returnsResponse(response, method, url, body, headers) {
    backend.connections.subscribe(connection => {
      expect(connection.request.url).toEqual(url);
      expect(connection.request.method).toEqual(method);

      if (body) {
        expect(connection.request.text()).toEqual(body);
      }

      if (headers) {
        for (let header in headers) {
          if (headers.hasOwnProperty(header)) {
            expect(connection.request.headers.get(header)).toEqual(headers[header]);
          }
        }
      }

      connection.mockRespond(new Response(new ResponseOptions({
        body: JSON.stringify(response)
      })));
    });
  }

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        PostService,
        MockBackend,
        BaseRequestOptions,
        AUTH_PROVIDERS,
        {
          provide: Http,
          useFactory: (mokcBackend, defaultOptions) => {
            return new Http(mokcBackend, defaultOptions);
          },
          deps: [MockBackend, BaseRequestOptions]
        }
      ]
    });

    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Authorization', 'Bearer secretToken');

    spyOn(RequestService.prototype, 'getAuthHeaders').and.returnValue(headers);
  });

  beforeEach(inject([PostService, MockBackend], (postService, mockBackend) => {
    service = postService;
    backend = mockBackend;
  }));

  it('should refresh remote posts', () => {
    returnsResponse(postsResponse, RequestMethod.Get, '/posts');

    service.remotePosts.subscribe((posts) => {
      if (posts.length) {
        expect(posts).toEqual(postsResponse);
      }
    });

    service.refreshPosts();
  });

  it('should return posts got in response', () => {
    returnsResponse(postsResponse, RequestMethod.Get, '/posts');

    service.refreshPosts().subscribe((posts) => {
      expect(posts).toEqual(postsResponse);
    });
  });

  it('should return post', () => {
    returnsResponse(singlePost, RequestMethod.Get, `/post/${singlePost._id}`);

    service.getPost(singlePost._id).subscribe((post) => {
      expect(post).toEqual(singlePost);
    });
  });

  it('should add post', () => {
    returnsResponse(singlePost, RequestMethod.Post, '/post', JSON.stringify(singlePost), {
      'Content-Type': 'application/json', Authorization: 'Bearer secretToken'
    });

    service.addPost(singlePost).subscribe((post) => {
      expect(post).toEqual(singlePost);
      expect(RequestService.prototype.getAuthHeaders).toHaveBeenCalled();
    });
  });

  it('should update post', () => {
    returnsResponse(singlePost, RequestMethod.Post, `/post/${singlePost._id}`, JSON.stringify(singlePost), {
      'Content-Type': 'application/json', Authorization: 'Bearer secretToken'
    });

    service.updatePost(singlePost).subscribe((post) => {
      expect(post).toEqual(singlePost);
      expect(RequestService.prototype.getAuthHeaders).toHaveBeenCalled();
    });
  });
});
