import { TestBed } from '@angular/core/testing';

import { PatientActiveGuard } from './patient-active.guard';

describe('PatientActiveGuard', () => {
  let guard: PatientActiveGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(PatientActiveGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
