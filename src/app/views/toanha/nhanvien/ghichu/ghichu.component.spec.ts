import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GhichuComponent } from './ghichu.component';

describe('GhichuComponent', () => {
  let component: GhichuComponent;
  let fixture: ComponentFixture<GhichuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GhichuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GhichuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
