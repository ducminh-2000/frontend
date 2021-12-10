import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatephongComponent } from './createphong.component';

describe('CreatephongComponent', () => {
  let component: CreatephongComponent;
  let fixture: ComponentFixture<CreatephongComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreatephongComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatephongComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
