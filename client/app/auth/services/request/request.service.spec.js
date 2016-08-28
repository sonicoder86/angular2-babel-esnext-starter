import { TestBed, inject } from '@angular/core/testing';

import { RequestService } from './request.service';
import { StorageService } from '../storage/storage.service';

describe('RequestService', () => {
  let subject;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RequestService, StorageService]
    });

    spyOn(StorageService.prototype, 'getAuthToken').and.returnValue('secret_token');
  });

  beforeEach(inject([RequestService], (request) => {
    subject = request;
  }));

  it('should return JSON headers', () => {
    let result = subject.getJsonHeaders();

    expect(result.get('Content-Type')).toEqual('application/json');
  });

  it('should return authentication headers', () => {
    let result = subject.getAuthHeaders();

    expect(result.get('Content-Type')).toEqual('application/json');
    expect(result.get('Authorization')).toEqual('Bearer secret_token');
  });
});
