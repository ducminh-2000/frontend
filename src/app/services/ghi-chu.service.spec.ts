import { TestBed } from '@angular/core/testing';

import { GhiChuService } from './ghi-chu.service';

describe('GhiChuService', () => {
  let service: GhiChuService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GhiChuService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
