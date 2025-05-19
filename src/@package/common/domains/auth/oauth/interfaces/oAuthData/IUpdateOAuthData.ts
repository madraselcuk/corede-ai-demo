import IFacebookOAuthData from "./IFacebookOAuthData";
import IGoogleOAuthData from "./IGoogleOAuthData";
import ILinkedInOAuthData from "./ILinkedInOAuthData";

/**
 * #TODO: #DELETE
 * @deprecated
 */
export default interface IUpdateOAuthData {
  googleOAuthData?: IGoogleOAuthData;
  facebookOAuthData?: IFacebookOAuthData;
  linkedInOAuthData?: ILinkedInOAuthData;
}

/**
 * #TODO: #DELETE
 * @deprecated
 */
export function toUpdateOptionsForOAuthData(updateInput?: IUpdateOAuthData) {
  const updateOptions: any = {};
  if (!updateInput) {
    return updateOptions;
  }
  if (updateInput.googleOAuthData)
    updateOptions.googleOAuthData = updateInput.googleOAuthData;
  if (updateInput.facebookOAuthData)
    updateOptions.facebookOAuthData = updateInput.facebookOAuthData;
  if (updateInput.linkedInOAuthData)
    updateOptions.linkedInOAuthData = updateInput.linkedInOAuthData;
  return updateOptions;
}
