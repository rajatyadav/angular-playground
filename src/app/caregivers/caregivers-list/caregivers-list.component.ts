import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Caregiver } from '../caregiver-model';
import { CaregiverService } from '../caregiver.service';

@Component({
  selector: 'app-caregivers-list',
  templateUrl: './caregivers-list.component.html',
  styleUrls: ['./caregivers-list.component.scss']
})
export class CaregiversListComponent implements OnInit {
  caregivers: Caregiver[] = [];
  errorMessage = '';
  showImage = false;
  filter = ''
  displayedColumns: string[] = ['id', 'caregiverName', 'contact', 'registeredAt', 'action'];

  constructor(
    private caregiverService: CaregiverService,
    private router: Router,
    private ar: ActivatedRoute,
  ) {
    this.showImage = this.ar.snapshot.paramMap.get('showImage') === 'true' ? true : false;
    if(this.showImage) {
      this.enableImage();
    }
  }

  ngOnInit(): void {
    this.caregiverService.getCaregivers().subscribe({
      next: caregivers => {
        this.caregivers = caregivers;
      },
      error: err => this.errorMessage = err
    });
  }

  enableImage() {
    if(this.showImage) {
      this.router.navigate(['/caregivers', { showImage: 'true' }])
      this.displayedColumns.splice(1, 0, 'imageUrl');
    } else {
      this.router.navigate(['/caregivers'])
      this.displayedColumns.splice(this.displayedColumns.indexOf('imageUrl'), 1);
    }
  }
}
