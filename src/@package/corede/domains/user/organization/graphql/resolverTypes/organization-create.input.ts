import { IAddress, ISocialMedias } from "../../../../../common";

export interface IOrganizationCreateInput {
  name: string;
  legalName?: string;
  summary?: string;
  website?: string;
  addresses?: IAddress[];
  phone?: string;
  email?: string;
  socialMedias?: ISocialMedias;
  adminId: string;
}
