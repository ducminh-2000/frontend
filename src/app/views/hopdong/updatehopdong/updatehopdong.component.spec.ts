import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatehopdongComponent } from './updatehopdong.component';

describe('UpdatehopdongComponent', () => {
  let component: UpdatehopdongComponent;
  let fixture: ComponentFixture<UpdatehopdongComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdatehopdongComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdatehopdongComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
