import { Injectable } from 'angular2/core';
import { Headers } from 'angular2/http';
import { StorageService } from './storage';

@Injectable()
export class RequestService {
  static get parameters() {
    return [[StorageService]];
  }

  constructor(storage) {
    this._storage = storage;
  }

  getAuthHeaders() {
    let headers = this.getJsonHeaders();
    let authToken = this._storage.getAuthToken();

    headers.append('Authorization', `Bearer ${authToken}`);
    return headers;
  }

  getJsonHeaders() {
    let headers = new Headers();

    headers.append('Content-Type', 'application/json');
    return headers;
  }
}
