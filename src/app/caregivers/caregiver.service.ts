import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of, throwError } from 'rxjs';
import { catchError, tap, map } from 'rxjs/operators';

import { Caregiver } from './caregiver-model';

@Injectable({
  providedIn: 'root'
})
export class CaregiverService {
  private caregiversUrl = 'api/caregivers';

  constructor(private http: HttpClient) { }

  getCaregivers(): Observable<Caregiver[]> {
    return this.http.get<Caregiver[]>(this.caregiversUrl)
      .pipe(
        tap(data => console.log(JSON.stringify(data))),
        catchError(this.handleError)
      );
  }

  getCaregiver(id: number): Observable<Caregiver> {
    if (id === 0) {
      return of(this.initializeCaregiver());
    }
    const url = `${this.caregiversUrl}/${id}`;
    return this.http.get<Caregiver>(url)
      .pipe(
        tap(data => console.log('getCaregiver: ' + JSON.stringify(data))),
        catchError(this.handleError)
      );
  }

  private handleError(err) {
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

  private initializeCaregiver(): Caregiver {
    // Return an initialized object
    return {
      id: 0,
      caregiverName: null,
      caregiverCode: null,
      contact: null,
      dob: null,
      registeredAt: null,
      imageUrl: null,
    };
  }
}
