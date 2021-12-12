import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SwitchhopdongComponent } from './switchhopdong.component';

describe('SwitchhopdongComponent', () => {
  let component: SwitchhopdongComponent;
  let fixture: ComponentFixture<SwitchhopdongComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SwitchhopdongComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SwitchhopdongComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
