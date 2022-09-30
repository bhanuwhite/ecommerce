import { TestBed } from '@angular/core/testing';

import { ShareMenuItemsService } from './share-menu-items.service';

describe('ShareMenuItemsService', () => {
  let service: ShareMenuItemsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShareMenuItemsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
