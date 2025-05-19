import { IAddress, ISocialMedias } from "../../../../../common";

export interface IOrganizationCreateOwnInput {
  name: string;
  legalName?: string;
  summary?: string;
  website?: string;
  addresses?: IAddress[];
  phone?: string;
  email?: string;
  socialMedias?: ISocialMedias;
}
