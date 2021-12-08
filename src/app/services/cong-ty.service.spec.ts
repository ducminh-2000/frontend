import { TestBed } from '@angular/core/testing';

import { CongTyService } from './cong-ty.service';

describe('CongTyService', () => {
  let service: CongTyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CongTyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
