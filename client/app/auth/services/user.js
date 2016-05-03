import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { StorageService } from './storage';
import { RequestService } from './request';

@Injectable()
export class UserService {
  _loggedIn = new BehaviorSubject(false);

  static get parameters() {
    return [[Http], [StorageService], [RequestService]];
  }

  constructor(http, storage, request) {
    this._http = http;
    this._storage = storage;
    this._request = request;

    if (!!this._storage.getAuthToken()) {
      this._loggedIn.next(true);
    }
  }

  login(credentials) {
    return this._http
      .post('/login', JSON.stringify(credentials), { headers: this._request.getJsonHeaders() })
      .map(res => res.json())
      .map((res) => {
        if (res.success) {
          this._storage.setAuthToken(res.auth_token);
          this._loggedIn.next(true);
        }

        return res.success;
      });
  }

  logout() {
    this._storage.removeAuthToken();
    this._loggedIn.next(false);
  }

  isLoggedIn() {
    return this._loggedIn.getValue();
  }

  getLoggedIn() {
    return this._loggedIn;
  }
}
