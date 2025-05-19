import {
  IEntity,
  IHasTimeStamp,
  IHasOptionalUserAudit,
  Currency,
} from "@common_package";
import { OrderTarget, OrderStatus } from "../enums";
import { IOrderPayment } from "./order-payment.interface";
import { IOrderProduct } from "./order-product.interface";
import { IHasOptionalOrganization } from "../../../user";

export interface IOrderError {
  name: string;
  data: any;
}

/**
 * @property `price` the original price without any discount or tax
 * @property `discount` the amount of discount. It is not percentage, it is actual value of discount
 * @property `discountedPrice` the price without any tax but discounts are included
 * @property `netPrice` the price including discount and tax. This is the price that customer needs to pay
 */
export interface IOrderPrice {
  currency: Currency;
  taxRate: number;
  price: number;
  discount: number;
  discountedPrice: number;
  netPrice: number;
}

export interface IBaseOrder extends IHasOptionalOrganization {
  orderTarget: OrderTarget;
  orderStatus: OrderStatus;
  error?: IOrderError;
  orderedUser: IEntity;
  products: IOrderProduct[];
  totalPrice: IOrderPrice;
  payment?: IOrderPayment;
}

export interface IBaseOrderEntity extends IEntity, IBaseOrder {}

export interface IOrder
  extends IBaseOrderEntity,
    IHasTimeStamp,
    IHasOptionalUserAudit {}
