export interface IRegisterByInput {
  name?: string;
  surname?: string;
  email: string;
  role: string; // TODO: Role enum
  referrerCode?: string;
}
