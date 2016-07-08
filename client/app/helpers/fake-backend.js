import { MockBackend } from '@angular/http/testing';
import { Http, BaseRequestOptions, Response, ResponseOptions, RequestMethod } from '@angular/http';

export class BackendExpectation {
  constructor(options) {
    this.options = options;
  }

  respond(status, body) {
    this.status = status;
    this.body = body;
  }

  verify(connection) {
    expect(connection.request.url).toEqual(this.options.url, 'Request url missmatch.');
    expect(connection.request.method).toEqual(this.options.method, 'Request method missmatch.');
    if (this.options.hasOwnProperty('body')) {
      expect(connection.request.text()).toEqual(this.options.body, 'Request body missmatch.');
    }

    if (this.options.hasOwnProperty('headers')) {
      for (let header in this.options.headers) {
        if (this.options.headers.hasOwnProperty(header)) {
          expect(connection.request.headers.get(header))
            .toEqual(this.options.headers[header], `Request header missmatch for ${header}.`);
        }
      }
    }

    connection.mockRespond(new Response(new ResponseOptions({
      body: this.body,
      status: this.status
    })));
  }
}

export class FakeBackend extends MockBackend {
  _pendingConnections = [];
  _expectations = [];

  constructor() {
    super();

    this.connections.subscribe((connection) => {
      this._pendingConnections.push(connection);
    });
  }

  expectPOST(url, body) {
    return this._addExpectation({ url, body, method: RequestMethod.Post });
  }

  _addExpectation(options) {
    let expectation = new BackendExpectation(options);
    this._expectations.push(expectation);
    return expectation;
  }

  flush() {
    for (let order in this._pendingConnections) {
      if (this._pendingConnections.hasOwnProperty(order)) {
        this._expectations[order].verify(
          this._pendingConnections[order]
        );
      }
    }
  }
}

export const FAKE_BACKEND_PROVIDERS = [
  FakeBackend,
  BaseRequestOptions,
  {
    provide: Http,
    useFactory: (backend, defaultOptions) => {
      return new Http(backend, defaultOptions);
    },
    deps: [FakeBackend, BaseRequestOptions]
  }
];
