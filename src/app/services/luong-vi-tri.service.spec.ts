import { TestBed } from '@angular/core/testing';

import { LuongViTriService } from './luong-vi-tri.service';

describe('LuongViTriService', () => {
  let service: LuongViTriService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LuongViTriService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
