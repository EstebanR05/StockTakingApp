export interface user {
  id: number;
  name: string;
  lastName: string;
  email: string;
  username: string;
  age: number;
  staff: string;
  company: string;
  address: string;
  phone: number;
  city: string;
  country: string;
  postalCode: number;
  aboutMe: string;
  token: string;
}

export interface userLogin {
  email: string;
  password: string;
}