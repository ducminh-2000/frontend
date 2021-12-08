import { TestBed } from '@angular/core/testing';

import { NVToaNhaService } from './nvtoa-nha.service';

describe('NVToaNhaService', () => {
  let service: NVToaNhaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NVToaNhaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
