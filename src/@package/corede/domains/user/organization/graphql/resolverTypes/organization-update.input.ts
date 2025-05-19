import { IEntity } from "@common_package";
import { IAddress, ISocialMedias } from "../../../../../common";

export interface IOrganizationUpdateFilterInput extends IEntity {}

export interface IOrganizationUpdateInput {
  name?: string;
  legalName?: string;
  summary?: string;
  website?: string;
  addresses?: IAddress[];
  phone?: string;
  email?: string;
  socialMedias?: ISocialMedias;
}
