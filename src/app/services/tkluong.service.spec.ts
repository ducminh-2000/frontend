import { TestBed } from '@angular/core/testing';

import { TKLuongService } from './tkluong.service';

describe('TKLuongService', () => {
  let service: TKLuongService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TKLuongService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
