import { TestBed, inject } from '@angular/core/testing';
import localStorage from 'localStorage';

import { StorageService } from './storage.service';

describe('StorageService', () => {
  let subject;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [StorageService]
    });
  });

  beforeEach(inject([StorageService], (storage) => {
    subject = storage;
  }));

  it('should get auth token', () => {
    spyOn(localStorage, 'getItem').and.returnValue('secret_token');

    expect(subject.getAuthToken()).toEqual('secret_token');
    expect(localStorage.getItem).toHaveBeenCalledWith('auth_token');
  });

  it('should set auth token', () => {
    spyOn(localStorage, 'setItem');

    subject.setAuthToken('new_token');

    expect(localStorage.setItem).toHaveBeenCalledWith('auth_token', 'new_token');
  });

  it('should remove auth token', () => {
    spyOn(localStorage, 'removeItem');

    subject.removeAuthToken();

    expect(localStorage.removeItem).toHaveBeenCalledWith('auth_token');
  });
});
