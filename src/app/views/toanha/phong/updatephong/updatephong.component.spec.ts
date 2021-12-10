import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatephongComponent } from './updatephong.component';

describe('UpdatephongComponent', () => {
  let component: UpdatephongComponent;
  let fixture: ComponentFixture<UpdatephongComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdatephongComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdatephongComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
