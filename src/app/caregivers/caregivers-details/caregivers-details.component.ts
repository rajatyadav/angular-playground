import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Caregiver } from '../caregiver-model';
import { CaregiverService } from '../caregiver.service';

@Component({
  selector: 'app-caregivers-details',
  templateUrl: './caregivers-details.component.html',
  styleUrls: ['./caregivers-details.component.scss']
})
export class CaregiversDetailsComponent implements OnInit {
  caregiver: Caregiver = null;
  errorMessage = '';

  constructor(
    private caregiverService: CaregiverService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    const caregiverId = this.route.snapshot.params['id'];
    this.getPatientDetails(caregiverId);
  }

  getPatientDetails(id) {
    this.caregiverService.getCaregiver(id).subscribe({
      next: caregiver => {
        this.caregiver = caregiver;
      },
      error: err => {
        console.log('error', err);
        this.errorMessage = err
      }
    })
  }

}
