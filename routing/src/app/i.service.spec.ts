import { TestBed } from '@angular/core/testing';

import { IService } from './i.service';

describe('IService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: IService = TestBed.get(IService);
    expect(service).toBeTruthy();
  });
});
