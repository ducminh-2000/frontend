import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatehopdongComponent } from './createhopdong.component';

describe('CreatehopdongComponent', () => {
  let component: CreatehopdongComponent;
  let fixture: ComponentFixture<CreatehopdongComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreatehopdongComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatehopdongComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
