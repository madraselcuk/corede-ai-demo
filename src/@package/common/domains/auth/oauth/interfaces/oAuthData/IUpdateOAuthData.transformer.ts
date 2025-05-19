import IUpdateOAuthData from "./IUpdateOAuthData";

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
