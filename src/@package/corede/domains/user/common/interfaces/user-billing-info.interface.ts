import {
  IEntity,
  IHasOptionalTimeStamp,
  IHasOptionalUserAudit,
} from "@common_package";

export interface IBaseUserBillingInfo {
  name: string;
  surname: string;
  email: string;
  phone: string;
  country: string;
  state: string;
  /**
   * this field is required but if no city is provided state value should be written
   */
  city: string;
  address: string;
  zip: string;
  /**
   * - if country is Turkey, this field is required
   * - if not, default value is 2222222222
   */
  identityNumber: string;

  /**
   * If billing info is of a company/organization, then this field is required
   */
  companyName?: string;
  /**
   * If billing info is of a company/organization, then this field is required
   */
  vat?: string;
  /**
   * If billing info is of a company/organization, then this field is required
   */
  taxOffice?: string;
}

export interface IBaseUserBillingInfoEntity
  extends IEntity,
    IBaseUserBillingInfo {}

export interface IUserBillingInfo
  extends IBaseUserBillingInfoEntity,
    IHasOptionalTimeStamp,
    IHasOptionalUserAudit {}
