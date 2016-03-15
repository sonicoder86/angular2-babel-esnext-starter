import { PostService } from './post';
import { MockBackend } from 'angular2/http/testing';
import { provide, Injector } from 'angular2/core';
import { Http, BaseRequestOptions, Response, ResponseOptions } from 'angular2/http';

describe('PostService', () => {
  let service, backend;
  let singlePost = { _id: 'asdgre', name: 'Angular', website: 'http://angular.io' };
  let postsResponse = [singlePost];

  function returnsResponse(response) {
    backend.connections.subscribe(connection => {
      connection.mockRespond(new Response(new ResponseOptions({
        body: JSON.stringify(response)
      })));
    });
  }

  beforeEachProviders(() => [
    PostService,
    MockBackend,
    BaseRequestOptions,
    provide(Http, {
      useFactory: (backend, defaultOptions) => {
        return new Http(backend, defaultOptions);
      },
      deps: [MockBackend, BaseRequestOptions]
    })
  ]);

  beforeEach(inject([Injector], (injector) => {
    service = injector.get(PostService);
    backend = injector.get(MockBackend);
  }));

  it('should refresh remote posts', (done) => {
    returnsResponse(postsResponse);

    service.remotePosts.subscribe((posts) => {
      if (posts.length) {
        expect(posts).toEqual(postsResponse);
        done();
      }
    });

    service.refreshPosts();
  });

  it('should return posts got in response', (done) => {
    returnsResponse(postsResponse);

    service.refreshPosts().subscribe((posts) => {
      expect(posts).toEqual(postsResponse);
      done();
    });
  });

  it('should return post', (done) => {
    returnsResponse(singlePost);

    service.getPost(singlePost._id).subscribe((post) => {
      expect(post).toEqual(singlePost);
      done();
    });
  });
});
