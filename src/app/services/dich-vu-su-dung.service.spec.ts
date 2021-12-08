import { TestBed } from '@angular/core/testing';

import { DichVuSuDungService } from './dich-vu-su-dung.service';

describe('DichVuSuDungService', () => {
  let service: DichVuSuDungService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DichVuSuDungService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
