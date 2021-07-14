import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of, throwError } from 'rxjs';
import { catchError, tap, map } from 'rxjs/operators';

import { Patient } from './patient-model';

@Injectable({
  providedIn: 'root'
})
export class PatientService {
  private patientsUrl = 'api/patients';

  constructor(private http: HttpClient) { }

  getPatients(): Observable<Patient[]> {
    return this.http.get<Patient[]>(this.patientsUrl)
      .pipe(
        tap(data => console.log(JSON.stringify(data))),
        catchError(this.handleError)
      );
  }

  getPatient(id: number): Observable<Patient> {
    if (id === 0) {
      return of(this.initializePatient());
    }
    const url = `${this.patientsUrl}/${id}`;
    return this.http.get<Patient>(url)
      .pipe(
        tap(data => console.log('getPatient: ' + JSON.stringify(data))),
        catchError(this.handleError)
      );
  }

  createPatient(Patient: Patient): Observable<Patient> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    Patient.id = null;
    return this.http.post<Patient>(this.patientsUrl, Patient, { headers })
      .pipe(
        tap(data => console.log('createPatient: ' + JSON.stringify(data))),
        catchError(this.handleError)
      );
  }

  deletePatient(id: number): Observable<{}> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const url = `${this.patientsUrl}/${id}`;
    return this.http.delete<Patient>(url, { headers })
      .pipe(
        tap(data => console.log('deletePatient: ' + id)),
        catchError(this.handleError)
      );
  }

  updatePatient(patient: Patient): Observable<Patient> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const url = `${this.patientsUrl}/${patient.id}`;
    return this.http.put<Patient>(url, patient, { headers })
      .pipe(
        tap(() => console.log('updatePatient: ' + patient.id)),
        // Return the patient on an update
        map(() => patient),
        catchError(this.handleError)
      );
  }

  private handleError(err) {
    // in a real world app, we may send the server to some remote logging infrastructure
    // instead of just logging it to the console
    let errorMessage: string;
    if (err.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      errorMessage = `An error occurred: ${err.error.message}`;
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      errorMessage = `Backend returned code ${err.status}: ${err.body.error}`;
    }
    console.error(err);
    return throwError(errorMessage);
  }

  private initializePatient(): Patient {
    // Return an initialized object
    return {
      id: 0,
      patientName: null,
      patientCode: null,
      contact: null,
      dob: null,
      registeredAt: null,
      imageUrl: null,
    };
  }
}
