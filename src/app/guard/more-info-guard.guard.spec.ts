import { TestBed } from '@angular/core/testing';

import { MoreInfoGuardGuard } from './more-info-guard.guard';

describe('MoreInfoGuardGuard', () => {
  let guard: MoreInfoGuardGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(MoreInfoGuardGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
