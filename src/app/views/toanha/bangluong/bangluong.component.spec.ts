import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BangluongComponent } from './bangluong.component';

describe('BangluongComponent', () => {
  let component: BangluongComponent;
  let fixture: ComponentFixture<BangluongComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BangluongComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BangluongComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
