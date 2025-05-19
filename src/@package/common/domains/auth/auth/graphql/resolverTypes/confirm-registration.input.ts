export interface IConfirmRegistrationInput {
  token: string;
  code: string;
  resetPasswordToken?: string;
  password?: string;
}
