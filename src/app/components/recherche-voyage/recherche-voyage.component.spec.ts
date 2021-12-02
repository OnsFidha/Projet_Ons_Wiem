import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RechercheVoyageComponent } from './recherche-voyage.component';

describe('RechercheVoyageComponent', () => {
  let component: RechercheVoyageComponent;
  let fixture: ComponentFixture<RechercheVoyageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RechercheVoyageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RechercheVoyageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
