import { TestBed } from '@angular/core/testing';

import { BehaviorTestingService } from './behavior-testing.service';

describe('BehaviorTestingService', () => {
  let service: BehaviorTestingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BehaviorTestingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
