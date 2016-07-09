import localStorage from 'localStorage';

import { StorageService } from './storage.service';

describe('StorageService', () => {
  let subject;

  beforeEach(() => {
    spyOn(localStorage, 'getItem').and.returnValue('secret_token');
    spyOn(localStorage, 'setItem');
    spyOn(localStorage, 'removeItem');
  });

  beforeEach(() => {
    addProviders([StorageService]);
  });

  beforeEach(inject([StorageService], (storage) => {
    subject = storage;
  }));

  it('should get auth token', () => {
    expect(subject.getAuthToken()).toEqual('secret_token');
    expect(localStorage.getItem).toHaveBeenCalledWith('auth_token');
  });

  it('should set auth token', () => {
    subject.setAuthToken('new_token');

    expect(localStorage.setItem).toHaveBeenCalledWith('auth_token', 'new_token');
  });

  it('should remove auth token', () => {
    subject.removeAuthToken();

    expect(localStorage.removeItem).toHaveBeenCalledWith('auth_token');
  });
});
