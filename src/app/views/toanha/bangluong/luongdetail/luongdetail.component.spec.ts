import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LuongdetailComponent } from './luongdetail.component';

describe('LuongdetailComponent', () => {
  let component: LuongdetailComponent;
  let fixture: ComponentFixture<LuongdetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LuongdetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LuongdetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
