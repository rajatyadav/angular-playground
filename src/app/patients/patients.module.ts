import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

import { PatientListComponent } from './patient-list/patient-list.component';
import { PatientDetailsComponent } from './patient-details/patient-details.component';
import { PatientEditComponent } from './patient-edit/patient-edit.component';
import { PatientEditInfoComponent } from './patient-edit/patient-edit-info/patient-edit-info.component'
import { PatientEditMedicationComponent } from './patient-edit/patient-edit-medication/patient-edit-medication.component'
import { PatientResolver } from './patient-resolver.service'

import { AuthGuard } from '../auth/auth.guard';


@NgModule({
  declarations: [PatientListComponent, PatientDetailsComponent, PatientEditComponent],
  imports: [
    CommonModule,
    MatTableModule,
    MatButtonModule,
    MatCardModule,
    MatSlideToggleModule,
    RouterModule.forChild([
      {
        path: '', //patients
        component: PatientListComponent,
      },
      {
        path: ':id', //patients/id
        component: PatientDetailsComponent,
        resolve: { resolvedData: PatientResolver },
        // canActivate: [AuthGuard]
      },
      {
        path: ':id/edit', //patients/12/edit
        component: PatientEditComponent,
        resolve: { resolvedData: PatientResolver },
        children: [
          { path: '', redirectTo: 'info', pathMatch: 'full' },
          { path: 'info', component: PatientEditInfoComponent },
          { path: 'medication', component: PatientEditMedicationComponent, outlet: 'second'}
        ]
      }
    ])
  ]
})
export class PatientsModule { }
