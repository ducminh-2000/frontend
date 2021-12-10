import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatephongbanComponent } from './createphongban.component';

describe('CreatephongbanComponent', () => {
  let component: CreatephongbanComponent;
  let fixture: ComponentFixture<CreatephongbanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreatephongbanComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatephongbanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
