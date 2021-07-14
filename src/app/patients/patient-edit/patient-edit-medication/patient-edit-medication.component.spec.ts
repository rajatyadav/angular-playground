import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientEditMedicationComponent } from './patient-edit-medication.component';

describe('PatientEditMedicationComponent', () => {
  let component: PatientEditMedicationComponent;
  let fixture: ComponentFixture<PatientEditMedicationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PatientEditMedicationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientEditMedicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
