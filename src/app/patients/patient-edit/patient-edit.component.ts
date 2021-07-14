import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Patient, PatientResolved } from '../patient-model';
import { PatientService } from '../patient.service';

@Component({
  selector: 'app-patient-edit',
  templateUrl: './patient-edit.component.html',
  styleUrls: ['./patient-edit.component.scss']
})
export class PatientEditComponent implements OnInit {
  patient: Patient = null;
  errorMessage = '';

  constructor(
    private patientService: PatientService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    /** From resolver */
    const resolvedData: PatientResolved = this.route.snapshot.data['resolvedData'];
    this.errorMessage = resolvedData.error;
    this.onPatientRetrieved(resolvedData.patient);
  }

  onPatientRetrieved(patient) {
    this.patient = patient;
  }

}
