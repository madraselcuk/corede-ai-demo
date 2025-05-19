import { IAuthToken, ITwoFactorAuthToken } from "./token.type";

export interface ILoginResultUser {
  email: string;
  userId: string;
  role: string; // TODO: Role enum
  username?: string;
  name?: string;
  surname?: string;
  languageCode?: string;
  countryCode?: string;
}

/**
 * @field `twoFactorCode` - this will be used when notification sending is ignore in test or dev environment
 */
export interface ILoginDevMetaData {
  twoFactorCode: number;
}

/**
 * if Two factor authentication is active (twoFactorAuth = true), only twoFactorToken will be returned (perhaps devMetaData depending on the environment)
 */
export interface ILoginResult extends Partial<IAuthToken>, ITwoFactorAuthToken {
  user?: ILoginResultUser;
  readonly devMetaData?: ILoginDevMetaData;
}
