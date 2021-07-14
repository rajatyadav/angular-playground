import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

import { CaregiversListComponent } from './caregivers-list/caregivers-list.component';
import { CaregiversDetailsComponent } from './caregivers-details/caregivers-details.component';



@NgModule({
  declarations: [CaregiversListComponent, CaregiversDetailsComponent],
  imports: [
    CommonModule,
    MatTableModule,
    MatButtonModule,
    MatCardModule,
    MatSlideToggleModule,
    RouterModule.forChild([
      { path: 'caregivers', component: CaregiversListComponent },
      {
        path: 'caregivers/:id',
        component: CaregiversDetailsComponent,
      }
    ])
  ]
})
export class CaregiversModule { }
