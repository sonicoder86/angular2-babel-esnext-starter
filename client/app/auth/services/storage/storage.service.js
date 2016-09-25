const STORAGE_KEY = 'auth_token';

export class StorageService {
  getAuthToken() {
    return localStorage.getItem(STORAGE_KEY);
  }

  setAuthToken(token) {
    localStorage.setItem(STORAGE_KEY, token);
  }

  removeAuthToken() {
    localStorage.removeItem(STORAGE_KEY);
  }
}
