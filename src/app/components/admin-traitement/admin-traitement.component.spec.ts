import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminTraitementComponent } from './admin-traitement.component';

describe('AdminTraitementComponent', () => {
  let component: AdminTraitementComponent;
  let fixture: ComponentFixture<AdminTraitementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminTraitementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminTraitementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
