import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatedichvuComponent } from './updatedichvu.component';

describe('UpdatedichvuComponent', () => {
  let component: UpdatedichvuComponent;
  let fixture: ComponentFixture<UpdatedichvuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdatedichvuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdatedichvuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
