import { TestBed } from '@angular/core/testing';

import { LoginCommunicationService } from '../login-communication.service';

describe('LoginCommunicationService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LoginCommunicationService = TestBed.get(LoginCommunicationService);
    expect(service).toBeTruthy();
  });
});
