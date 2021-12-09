import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NhanviencreateComponent } from './nhanviencreate.component';

describe('NhanviencreateComponent', () => {
  let component: NhanviencreateComponent;
  let fixture: ComponentFixture<NhanviencreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NhanviencreateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NhanviencreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
