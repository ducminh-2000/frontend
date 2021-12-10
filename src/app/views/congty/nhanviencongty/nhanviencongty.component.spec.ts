import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NhanviencongtyComponent } from './nhanviencongty.component';

describe('NhanviencongtyComponent', () => {
  let component: NhanviencongtyComponent;
  let fixture: ComponentFixture<NhanviencongtyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NhanviencongtyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NhanviencongtyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
