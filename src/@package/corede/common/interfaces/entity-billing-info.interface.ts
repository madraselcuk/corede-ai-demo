import {
  IEntity,
  IHasOptionalTimeStamp,
  IHasOptionalUserAudit,
} from "@common_package";
import { IAddress } from "./address.interface";

export interface IBaseEntityBillingInfo extends IAddress {
  /**
   * FullName/LegalCompanyName/LegalGovernmentAgency
   */
  fullName: string;
  phone: string;
  address: string;
  country: string;
  state: string;
  city: string;
  street: string;
  zip: string;
  /**
   * BusinessVAT/PersonalID
   */
  vat?: string;
  taxOffice?: string;
}

export interface IBaseEntityBillingInfoEntity
  extends IEntity,
    IBaseEntityBillingInfo {}

export interface IEntityBillingInfo
  extends IBaseEntityBillingInfoEntity,
    IHasOptionalTimeStamp,
    IHasOptionalUserAudit {}
