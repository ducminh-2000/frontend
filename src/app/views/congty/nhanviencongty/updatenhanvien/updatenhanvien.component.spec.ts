import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatenhanvienComponent } from './updatenhanvien.component';

describe('UpdatenhanvienComponent', () => {
  let component: UpdatenhanvienComponent;
  let fixture: ComponentFixture<UpdatenhanvienComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdatenhanvienComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdatenhanvienComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
