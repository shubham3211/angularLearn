import { TestBed } from '@angular/core/testing';

import { MService } from './m.service';

describe('MService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MService = TestBed.get(MService);
    expect(service).toBeTruthy();
  });
});
