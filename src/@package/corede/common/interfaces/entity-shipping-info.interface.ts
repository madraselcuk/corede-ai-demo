import { IEntity } from "@common_package";

export interface IBaseEntityShippingInfo {
  fullName: string;
  phone: string;
  address: string;
  country: string;
  state: string;
  city: string;
  street: string;
  zip: string;
}

export interface IBaseEntityShippingInfoEntity
  extends IEntity,
    IBaseEntityShippingInfo {}

export interface IEntityShippingInfo extends IBaseEntityShippingInfoEntity {}
