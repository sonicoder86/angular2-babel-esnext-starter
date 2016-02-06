'use strict';
import {Injectable} from 'angular2/core';
import {Http, Headers} from 'angular2/http';
import localStorage from 'localStorage';
import {BehaviorSubject} from 'rxjs';

@Injectable()
export class UserService {
  _loggedIn = new BehaviorSubject(false);

  static get parameters() {
    return [[Http]];
  }

  constructor(http) {
    this._http = http;

    if (this._getLogInState()) {
      this._loggedIn.next(true);
    }
  }

  login(credentials) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');

    return this._http
      .post('/login', JSON.stringify(credentials), {headers: headers})
      .map(res => res.json())
      .map((res) => {
        if (res.success) {
          localStorage.setItem('auth_token', res.token);
          this._loggedIn.next(true);
        }

        return res.success;
      });
  }

  logout() {
    localStorage.removeItem('auth_token');
    this._loggedIn.next(false);
  }

  isLoggedIn() {
    return this._loggedIn.getValue();
  }

  getLoggedIn() {
    return this._loggedIn;
  }

  _getLogInState() {
    return !!localStorage.getItem('auth_token');
  }
}
