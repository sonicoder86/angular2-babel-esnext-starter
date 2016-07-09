import { Injector } from '@angular/core';

import { UserService } from './user.service';
import { FakeBackend, FAKE_BACKEND_PROVIDERS } from '../../../helpers/fake-backend';
import { StorageService } from '../storage/storage.service';
import { RequestService } from '../request/request.service';

describe('UserService', () => {
  let subject;
  let backend;
  let storage;
  let credentials = { email: 'user@gmail.com', password: 'super_secret' };
  function successfulHttpLogin() {
    backend.expectPOST('/login', JSON.stringify(credentials))
      .respond(200, JSON.stringify({ success: true, auth_token: 'secret_token' }));
  }

  beforeEach(() => {
    addProviders([
      UserService,
      StorageService,
      RequestService,
      FAKE_BACKEND_PROVIDERS
    ]);
  });

  beforeEach(inject([Injector], (injector) => {
    subject = injector.get(UserService);
    storage = injector.get(StorageService);
    backend = injector.get(FakeBackend);
  }));

  beforeEach(() => {
    spyOn(storage, 'setAuthToken');
    spyOn(storage, 'removeAuthToken');
  });

  it('should log in user when request was successful', (done) => {
    successfulHttpLogin();

    subject.login(credentials).subscribe((result) => {
      expect(result).toBeTruthy();
      expect(storage.setAuthToken).toHaveBeenCalledWith('secret_token');
      done();
    });

    backend.flush();
  });

  it('should not log in user when request was unsuccessful', (done) => {
    backend.expectPOST('/login', JSON.stringify(credentials))
      .respond(200, JSON.stringify({ success: false }));

    subject.login(credentials).subscribe((result) => {
      expect(result).toBeFalsy();
      expect(storage.setAuthToken.calls.count()).toEqual(0);
      done();
    });

    backend.flush();
  });

  it('should return current login state', () => {
    successfulHttpLogin();

    subject.login(credentials).subscribe(() => { });
    backend.flush();

    expect(subject.isLoggedIn()).toBeTruthy();
  });

  it('should notify current login state', (done) => {
    successfulHttpLogin();

    subject.login(credentials).subscribe(() => { });
    backend.flush();

    subject.getLoggedIn().subscribe((loggedIn) => {
      expect(loggedIn).toBeTruthy();
      done();
    });
  });

  it('should log out user', () => {
    subject.logout();

    expect(storage.removeAuthToken).toHaveBeenCalled();
    expect(subject.isLoggedIn()).toBeFalsy();
  });
});
