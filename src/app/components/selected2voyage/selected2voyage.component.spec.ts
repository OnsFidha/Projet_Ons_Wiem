import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Selected2voyageComponent } from './selected2voyage.component';

describe('Selected2voyageComponent', () => {
  let component: Selected2voyageComponent;
  let fixture: ComponentFixture<Selected2voyageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Selected2voyageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Selected2voyageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
