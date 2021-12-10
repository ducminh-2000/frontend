import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatephongbanComponent } from './updatephongban.component';

describe('UpdatephongbanComponent', () => {
  let component: UpdatephongbanComponent;
  let fixture: ComponentFixture<UpdatephongbanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdatephongbanComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdatephongbanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
