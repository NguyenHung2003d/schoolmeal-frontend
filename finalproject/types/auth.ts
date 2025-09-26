export interface User {
  id: string;
  phone: string;
}

export interface AuthResponse {
  token: string;
  user: User;
}

export interface ContactFormData {
  name: string;
  email: string;
  phoneNumber: string;
  schoolName: string;
  availableTime: string;
  message: string;
}

export interface ContactResponse {
  success: boolean;
  message: string;
}