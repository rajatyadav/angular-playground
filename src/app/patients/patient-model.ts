/* Defines the patient entity */
export interface Patient {
  id: number;
  patientName: string;
  patientCode: string;
  contact: number;
  dob: string;
  registeredAt: string;
  imageUrl: string;
}

export interface PatientResolved {
  patient: Patient;
  error?: any;
}
