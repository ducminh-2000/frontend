import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NhanvienupdateComponent } from './nhanvienupdate.component';

describe('NhanvienupdateComponent', () => {
  let component: NhanvienupdateComponent;
  let fixture: ComponentFixture<NhanvienupdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NhanvienupdateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NhanvienupdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
