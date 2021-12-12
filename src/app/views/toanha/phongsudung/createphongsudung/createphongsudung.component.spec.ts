import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatephongsudungComponent } from './createphongsudung.component';

describe('CreatephongsudungComponent', () => {
  let component: CreatephongsudungComponent;
  let fixture: ComponentFixture<CreatephongsudungComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreatephongsudungComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatephongsudungComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
