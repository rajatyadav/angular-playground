import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';

import { Patient } from './patients/patient-model';
import { Caregiver } from './caregivers/caregiver-model';

@Injectable({
  providedIn: 'root',
})
export class DataService implements InMemoryDbService {
  createDb() {
    const patients: Patient[] = [
      {
        id: 1,
        patientName: 'Suprasanna',
        patientCode: 'PT-0011',
        contact: 234567890,
        dob: 'March 10, 1991',
        registeredAt: 'April 10, 2021',
        imageUrl: 'https://ca.slack-edge.com/T6RFY844A-UP2USHUB0-e6d4eae8bb23-512',
      },
      {
        id: 2,
        patientName: 'Raveena',
        patientCode: 'PT-0012',
        contact: 7654345678,
        dob: 'April 20, 1991',
        registeredAt: 'April 10, 2021',
        imageUrl: 'https://ca.slack-edge.com/T6RFY844A-U01CN7XFTSA-53d8966771d6-512',
      },
      {
        id: 3,
        patientName: 'Rohit',
        patientCode: 'PT-0013',
        contact: 987667898,
        dob: 'May 2, 1991',
        registeredAt: 'April 10, 2021',
        imageUrl: 'https://ca.slack-edge.com/T6RFY844A-U01DLEHB1PU-bf964493ad70-512',
      },
      {
        id: 5,
        patientName: 'Afsina',
        patientCode: 'PT-0015',
        contact: 456787654,
        dob: 'Jan 1, 1991',
        registeredAt: 'April 10, 2021',
        imageUrl: 'https://ca.slack-edge.com/T6RFY844A-UP0NV5SJC-858b07d651f9-512',
      },
      {
        id: 7,
        patientName: 'Ankit',
        patientCode: 'PT-0017',
        contact: 98765678,
        dob: 'Oct 7, 1991',
        registeredAt: 'April 10, 2021',
        imageUrl: 'https://ca.slack-edge.com/T6RFY844A-U011F636P4G-a9a0cb980156-512',
      },
      
    ];
    
    const caregivers: Caregiver[] = [
      {
        id: 4,
        caregiverName: 'Piyush Maharana',
        caregiverCode: 'CRC-004',
        contact: 234567890,
        dob: 'August 12, 1990',
        registeredAt: 'April 10, 2021',
        imageUrl: 'https://ca.slack-edge.com/T6RFY844A-UP2USE65U-d24bcae9a786-512',
      },
      {
        id: 6,
        caregiverName: 'Ramesh Kedlaya',
        caregiverCode: 'CRC-006',
        contact: 234567890,
        dob: 'July 20, 1990',
        registeredAt: 'April 10, 2021',
        imageUrl: 'https://ca.slack-edge.com/T6RFY844A-UP0NSUFT7-01596fba0fb5-512',
      },      
    ];
    return {patients, caregivers};
  }
}