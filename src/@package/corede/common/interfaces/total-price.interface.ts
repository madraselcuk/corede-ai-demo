import { IEntity } from "@common_package";

export interface IBaseTotalPrice {
  subTotal: number;
  taxTotal: number;
  discount: number;
  shippingTotal: number;
  total: number;
}

export interface IBaseTotalPriceEntity extends IEntity, IBaseTotalPrice {}

export interface ITotalPrice extends IBaseTotalPriceEntity {}
