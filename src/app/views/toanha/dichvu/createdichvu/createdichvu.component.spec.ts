import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatedichvuComponent } from './createdichvu.component';

describe('CreatedichvuComponent', () => {
  let component: CreatedichvuComponent;
  let fixture: ComponentFixture<CreatedichvuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreatedichvuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatedichvuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
