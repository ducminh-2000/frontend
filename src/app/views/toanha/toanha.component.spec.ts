import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToanhaComponent } from './toanha.component';

describe('ToanhaComponent', () => {
  let component: ToanhaComponent;
  let fixture: ComponentFixture<ToanhaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ToanhaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ToanhaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
