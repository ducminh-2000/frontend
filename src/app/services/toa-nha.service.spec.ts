import { TestBed } from '@angular/core/testing';

import { ToaNhaService } from './toa-nha.service';

describe('ToaNhaService', () => {
  let service: ToaNhaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ToaNhaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
