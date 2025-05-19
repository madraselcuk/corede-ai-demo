export interface IUpdateContactPhoneNumber {
  phoneNumber?: string;
}

export interface IVerifyContact {
  userId?: string;
}

export interface IUpdateContactPhoneNumberResult {
  message?: string;
  token: string;
}