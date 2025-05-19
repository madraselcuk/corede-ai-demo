/**
 * this is used to in organization list by related
 * - For some entities, organization list is necessary even if there os no organization entity view permission.
 * In those situations, permission to resolver will be determined by looking at the permission for target types instead of organization entity permission
 * ***example***:
 * - a permission with 
 */
export enum OrganizationRelatedTargetType {
  User = "User",
}
