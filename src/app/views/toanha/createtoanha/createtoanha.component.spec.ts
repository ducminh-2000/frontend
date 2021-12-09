import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatetoanhaComponent } from './createtoanha.component';

describe('CreatetoanhaComponent', () => {
  let component: CreatetoanhaComponent;
  let fixture: ComponentFixture<CreatetoanhaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreatetoanhaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatetoanhaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
