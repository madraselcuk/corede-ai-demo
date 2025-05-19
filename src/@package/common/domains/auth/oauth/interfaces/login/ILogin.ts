import IFacebookOAuthData from "../oAuthData/IFacebookOAuthData";
import IGoogleOAuthData from "../oAuthData/IGoogleOAuthData";
import ILinkedInOAuthData from "../oAuthData/ILinkedInOAuthData";

/**
 * #TODO: #DELETE
 * @deprecated
 */
export interface IFacebookLoginUser {
  email: string;
  facebookOAuthData?: IFacebookOAuthData;
}
/**
 * #TODO: #DELETE
 * @deprecated
 */
export interface IGoogleLoginUser {
  email: string;
  googleOAuthData?: IGoogleOAuthData;
}
/**
 * #TODO: #DELETE
 * @deprecated
 */
export interface ILinkedInLoginUser {
  email: string;
  linkedInOAuthData?: ILinkedInOAuthData;
}

/**
 * #TODO: #DELETE
 * @deprecated
 */
export interface ILoginFacebookRequest {
  accessToken?: string;
  authorizationToken?: string;
  facebookUserId?: string;
}

/**
 * #TODO: #DELETE
 * @deprecated
 */
export interface ILoginGoogleRequest {
  token: string;
}

/**
 * #TODO: #DELETE
 * @deprecated
 */
export interface ILoginLinkedInRequest {
  token: string;
}
