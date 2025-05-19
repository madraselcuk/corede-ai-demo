/**
 * #TODO: #DELETE
 * @deprecated
 */
export interface IRegisterFacebookRequest {
  role: string;
  accessToken?: string;
  authorizationToken?: string;
  facebookUserId?: string;
}

/**
 * #TODO: #DELETE
 * @deprecated
 */
export interface IRegisterGoogleRequest {
  role: string;
  token: string;
}

/**
 * #TODO: #DELETE
 * @deprecated
 */
export interface IRegisterLinkedInRequest {
  role: string;
  token: string;
}
