export interface RegistroUser {
  name: string;
  password: string;
  passwordRepeat: string;
  email: string;
  hobbies: string[];
  addressAll?: address[];
}

export interface address {
  address: string;
  city: string;
  code: number;
}
