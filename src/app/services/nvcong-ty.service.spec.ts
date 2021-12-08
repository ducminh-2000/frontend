import { TestBed } from '@angular/core/testing';

import { NVCongTyService } from './nvcong-ty.service';

describe('NVCongTyService', () => {
  let service: NVCongTyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NVCongTyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
