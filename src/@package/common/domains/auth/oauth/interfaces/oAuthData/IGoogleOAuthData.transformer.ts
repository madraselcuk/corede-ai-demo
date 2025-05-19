import IGoogleOAuthData from "./IGoogleOAuthData";

/**
 * #TODO: #DELETE
 * @deprecated
 */
export function toGoogleOAuthData(model: any): IGoogleOAuthData {
  return {
    ...model,
  } as IGoogleOAuthData;
}
