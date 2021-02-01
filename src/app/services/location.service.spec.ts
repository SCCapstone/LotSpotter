import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { LocationService } from './location.service';

describe('LocationService', () => {
  let service: LocationService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ 
        RouterTestingModule,
      ],
    });
    service = TestBed.inject(LocationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
