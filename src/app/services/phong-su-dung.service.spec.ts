import { TestBed } from '@angular/core/testing';

import { PhongSuDungService } from './phong-su-dung.service';

describe('PhongSuDungService', () => {
  let service: PhongSuDungService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PhongSuDungService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
