export interface IRegisterCodeCredential {
  token: string;
  code: number;
  resetPasswordToken?: string;
}

export interface IRegisterByCodeCredential {
  token: string;
  code: number;
  resetPasswordToken: string;
}

export interface ITwoFactorCodeCredential {
  twoFactorCode: number;
}

export interface IResetPasswordTokenCredential {
  token: string;
}
