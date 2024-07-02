export interface Iuser {
  id: number;
  name: string;
  lastName: string;
  email: string;
  password: string;
  username: string;
  age: number;
  staff: string;
  company: string;
  address: string;
  phone: number;
  city: string;
  country: string;
  postalCode: number;
  userInformation: string;
  aboutMe: string;
  token: string;
  id_admin: number;
}

export interface IuserLogin {
  email: string;
  password: string;
}
