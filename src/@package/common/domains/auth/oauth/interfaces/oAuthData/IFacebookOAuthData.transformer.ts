import IFacebookOAuthData from "./IFacebookOAuthData";

/**
 * #TODO: #DELETE
 * @deprecated
 */
export function toFacebookOAuthData(model: any): IFacebookOAuthData {
  return {
    id: model.id,
    name: model.name,
    email: model.email,
    pictureUrl: model.picture?.data?.url,
  };
}
