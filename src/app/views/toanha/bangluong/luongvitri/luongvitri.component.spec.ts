import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LuongvitriComponent } from './luongvitri.component';

describe('LuongvitriComponent', () => {
  let component: LuongvitriComponent;
  let fixture: ComponentFixture<LuongvitriComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LuongvitriComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LuongvitriComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
