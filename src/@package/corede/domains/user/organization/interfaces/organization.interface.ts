import {
  IEntity,
  IHasTimeStamp,
  IHasOptionalUserAudit,
  IFileMetadata,
  IFileMetadataForThumbnail,
} from "@common_package";
import { IUser } from "../../user";
import { IHasRoles } from "../../../auth";
import { IDepartment } from "../../department";
import { IOrganizationIntegrations } from "./organization-integrations.interface";
import { IOrganizationActiveSubscriptions } from "./organization-active-subscriptions.interface";
import { OrganizationStatus } from "../enums/organization-status.enum";
import { IAddress, ISocialMedias } from "../../../../common";
import { IUserBillingInfo } from "../../common";

export interface IOrganizationPublic {
  name: string;
  logo?: IFileMetadataForThumbnail;
  legalName?: string;
}

export interface IBaseOrganization {
  name: string;
  logo?: IFileMetadata;
  legalName?: string;
  summary?: string;
  website?: string;
  addresses?: Array<IAddress>;
  phone?: string;
  email?: string;
  socialMedias?: ISocialMedias;
  status: OrganizationStatus;
  admin: IEntity;
}

export interface IBaseOrganizationEntity extends IEntity, IBaseOrganization {}

export interface IOrganization
  extends IBaseOrganizationEntity,
    IHasRoles,
    IHasTimeStamp,
    IHasOptionalUserAudit {
  users: Array<IUser>;
  departments: Array<IDepartment>;
  billingInfo?: IUserBillingInfo;
  integrations?: IOrganizationIntegrations;
  activeSubscriptions?: IOrganizationActiveSubscriptions;
}
