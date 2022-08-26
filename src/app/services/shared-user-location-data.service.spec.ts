import { TestBed } from '@angular/core/testing';

import { SharedUserLocationDataService } from './shared-user-location-data.service';

describe('SharedUserLocationDataService', () => {
  let service: SharedUserLocationDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SharedUserLocationDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
