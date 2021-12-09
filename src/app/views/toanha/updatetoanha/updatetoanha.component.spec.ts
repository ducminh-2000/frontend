import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatetoanhaComponent } from './updatetoanha.component';

describe('UpdatetoanhaComponent', () => {
  let component: UpdatetoanhaComponent;
  let fixture: ComponentFixture<UpdatetoanhaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdatetoanhaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdatetoanhaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
