import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Patient, PatientResolved } from '../patient-model';
import { PatientService } from '../patient.service';

@Component({
  selector: 'app-patient-details',
  templateUrl: './patient-details.component.html',
  styleUrls: ['./patient-details.component.scss']
})
export class PatientDetailsComponent implements OnInit {
  patient: Patient = null;
  errorMessage = '';

  constructor(
    private patientService: PatientService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    /** From component */
    // const patientId = this.route.snapshot.params['id'];
    // this.getPatientDetails(patientId);
    
    /** From resolver */
    const resolvedData: PatientResolved = this.route.snapshot.data['resolvedData'];
    this.errorMessage = resolvedData.error;
    this.onPatientRetrieved(resolvedData.patient);
  }

  /** if getting data from resolver */
  onPatientRetrieved(patient) {
    this.patient = patient;
  }


  /** if getting data from component itself */
  getPatientDetails(id) {
    this.patientService.getPatient(id).subscribe({
      next: patient => {
        this.patient = patient;
      },
      error: err => {
        console.log('error', err);
        this.errorMessage = err
      }
    })
  }
}
