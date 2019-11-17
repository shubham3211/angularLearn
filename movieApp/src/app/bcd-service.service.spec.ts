import { TestBed } from '@angular/core/testing';

import { BcdServiceService } from './bcd-service.service';

describe('BcdServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BcdServiceService = TestBed.get(BcdServiceService);
    expect(service).toBeTruthy();
  });
});
