'use strict';
import {Headers} from 'angular2/http';
import {storage} from './storage';

export const request = {
  getAuthHeaders: function() {
    let headers = this.getJsonHeaders();
    let authToken = storage.getAuthToken();

    headers.append('Authorization', 'Bearer ' + authToken);
    return headers;
  },

  getJsonHeaders: function() {
    let headers = new Headers();

    headers.append('Content-Type', 'application/json');
    return headers;
  }
};
