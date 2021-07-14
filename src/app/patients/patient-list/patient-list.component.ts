import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Patient } from '../patient-model';
import { PatientService } from '../patient.service';

@Component({
  selector: 'app-patient-list',
  templateUrl: './patient-list.component.html',
  styleUrls: ['./patient-list.component.scss']
})
export class PatientListComponent implements OnInit {
  patients: Patient[] = [];
  errorMessage = '';
  showImage = false;
  displayedColumns: string[] = ['id', 'patientName', 'contact', 'registeredAt', 'action'];

  constructor(
    private patientService: PatientService,
    private router: Router,
    private ar: ActivatedRoute,
  ) {
    this.showImage = this.ar.snapshot.queryParamMap.get('showImage') === 'true' ? true : false;
    if(this.showImage) {
      this.enableImage();
    }
  }

  ngOnInit(): void {
    this.patientService.getPatients().subscribe({
      next: patients => {
        this.patients = patients;
      },
      error: err => this.errorMessage = err
    });
  }

  enableImage() {
    if(this.showImage) {
      this.router.navigate(['/patients'], { queryParams: { showImage: this.showImage } })
      this.displayedColumns.splice(1, 0, 'imageUrl');
    } else {
      this.router.navigate(['/patients'], { queryParams: { } })
      this.displayedColumns.splice(this.displayedColumns.indexOf('imageUrl'), 1);
    }
  }

}
