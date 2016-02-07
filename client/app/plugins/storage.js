'use strict';
import localStorage from 'localStorage';

export const storage = {
  getAuthToken: function() {
    return localStorage.getItem('auth_token');
  },

  setAuthToken: function(token) {
    localStorage.setItem('auth_token', token);
  },

  removeAuthToken: function() {
    localStorage.removeItem('auth_token');
  }
};