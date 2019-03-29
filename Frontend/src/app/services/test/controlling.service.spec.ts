import { TestBed } from '@angular/core/testing';

import { ControllingService } from '../controlling.service';

describe('ControllingService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ControllingService = TestBed.get(ControllingService);
    expect(service).toBeTruthy();
  });
});
