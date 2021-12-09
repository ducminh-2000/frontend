import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DichvudasudungComponent } from './dichvudasudung.component';

describe('DichvudasudungComponent', () => {
  let component: DichvudasudungComponent;
  let fixture: ComponentFixture<DichvudasudungComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DichvudasudungComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DichvudasudungComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
