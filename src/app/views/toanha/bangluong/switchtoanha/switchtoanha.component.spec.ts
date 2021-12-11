import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SwitchtoanhaComponent } from './switchtoanha.component';

describe('SwitchtoanhaComponent', () => {
  let component: SwitchtoanhaComponent;
  let fixture: ComponentFixture<SwitchtoanhaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SwitchtoanhaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SwitchtoanhaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
