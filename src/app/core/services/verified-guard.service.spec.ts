import { TestBed } from '@angular/core/testing';

import { VerifiedGuardService } from './verified-guard.service';

describe('VerifiedGuardService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: VerifiedGuardService = TestBed.get(VerifiedGuardService);
    expect(service).toBeTruthy();
  });
});
