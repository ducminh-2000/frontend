import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatenhanvienComponent } from './createnhanvien.component';

describe('CreatenhanvienComponent', () => {
  let component: CreatenhanvienComponent;
  let fixture: ComponentFixture<CreatenhanvienComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreatenhanvienComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatenhanvienComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
