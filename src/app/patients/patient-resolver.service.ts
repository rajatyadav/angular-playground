import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

import { PatientResolved } from './patient-model';
import { PatientService } from './patient.service';

@Injectable({
  providedIn: 'root'
})
export class PatientResolver implements Resolve<PatientResolved> {

  constructor(private patientService: PatientService) { }

  resolve(
      route: ActivatedRouteSnapshot,
      state: RouterStateSnapshot
  ): Observable<PatientResolved> {
    const id = route.paramMap.get('id');
    if (isNaN(+id)) {
      const message = `Product id was not a number: ${id}`;
      console.error(message);
      return of({ patient: null, error: message });
    }

    return this.patientService.getPatient(+id)
      .pipe(
        map(patient => ({ patient: patient })),
        catchError(error => {
          const message = `Retrieval error: ${error}`;
          console.error(message);
          return of({ patient: null, error: message });
        })
      );
  }

}
