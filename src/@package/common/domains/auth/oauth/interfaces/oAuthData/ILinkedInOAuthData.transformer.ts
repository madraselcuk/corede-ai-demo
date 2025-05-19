import ILinkedInOAuthData from "./ILinkedInOAuthData";

/**
 * #TODO: #DELETE
 * @deprecated
 */
export function toLinkedInOAuthData(model: any): ILinkedInOAuthData {
  return {
    ...model,
  } as ILinkedInOAuthData;
}
