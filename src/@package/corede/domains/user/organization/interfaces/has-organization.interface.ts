import { IEntity } from "@common_package";

export interface IHasOptionalOrganizationId<T = string> {
  organizationId?: T;
}
export interface IHasOrganizationId<T = string> {
  organizationId: T;
}

export interface IHasOptionalOrganization<T = IEntity> {
  organization?: T;
}
export interface IHasOrganization<T = IEntity> {
  organization: T;
}
