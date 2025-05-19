export interface IAccessToken {
  accessToken: string;
  accessExpiresIn: string;
}

export interface IRefreshToken {
  refreshToken: string;
  refreshExpiresIn: string;
}

export interface ITwoFactorAuthToken {
  twoFactorAuth: boolean;
  twoFactorToken?: string;
}

export interface IAuthToken extends IAccessToken, IRefreshToken {}
