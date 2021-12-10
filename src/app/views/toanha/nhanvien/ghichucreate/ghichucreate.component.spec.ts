import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GhichucreateComponent } from './ghichucreate.component';

describe('GhichucreateComponent', () => {
  let component: GhichucreateComponent;
  let fixture: ComponentFixture<GhichucreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GhichucreateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GhichucreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
