import { RequestService } from './request';
import { StorageService } from './storage';

describe('request', () => {
  let subject;

  beforeEachProviders(() => [
    RequestService,
    StorageService
  ]);

  beforeEach(inject([RequestService], (request) => {
    subject = request;
  }));

  beforeEach(() => {
    spyOn(StorageService.prototype, 'getAuthToken').and.returnValue('secret_token');
  });

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
