import { Injectable } from '@angular/core';
import { Headers } from '@angular/http';

import { StorageService } from '../storage/storage.service';

@Injectable()
export class RequestService {

  constructor(storage: StorageService) {
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
