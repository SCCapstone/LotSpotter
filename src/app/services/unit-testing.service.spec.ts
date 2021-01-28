import { TestBed } from '@angular/core/testing';

import { UnitTestingService } from './unit-testing.service';

describe('UnitTestingService', () => {
  let service: UnitTestingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UnitTestingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
