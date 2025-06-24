// Certification Types
export interface CertificationData {
  id?: string;
  personnelName: string;
  certificationType: string;
  project: string;
  issueDate: string;
  expiryDate: string;
  certificationNumber: string;
  issuingAuthority: string;
  status?: string;
}

// Personnel Allocation Types
export interface PersonnelAllocationData {
  id?: string;
  personnelName: string;
  role: string;
  project: string;
  startDate: string;
  endDate: string;
  location: string;
  reportingManager: string;
  status?: string;
}

// Travel Booking Types
export interface TravelBookingData {
  id?: string;
  personnelName: string;
  project: string;
  departureDate: string;
  returnDate: string;
  origin: string;
  destination: string;
  flightClass: string;
  accommodationType: string;
  specialRequirements?: string;
  estimatedCost?: number;
  status?: string;
}

// Form Props Types
export interface CertificationFormProps {
  onSubmit: (data: CertificationData) => void;
  onCancel: () => void;
}

export interface PersonnelAllocationFormProps {
  onSubmit: (data: PersonnelAllocationData) => void;
  onCancel: () => void;
}

export interface TravelBookingFormProps {
  onSubmit: (data: TravelBookingData) => void;
  onCancel: () => void;
} 