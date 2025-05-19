export interface IRegisterInput {
  name?: string;
  surname?: string;
  email: string;
  password: string;
  role: string; // TODO: Role enum
  referrerCode?: string;
}