export interface IConfirmRegistrationByUserInput {
  token: string;
  code: string;
  resetPasswordToken: string;
  password: string;
}
