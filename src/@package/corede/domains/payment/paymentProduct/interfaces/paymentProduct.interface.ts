import {
  Currency,
  IEntity,
  IFileMetadata,
  IHasOptionalUserAudit,
  IHasTimeStamp,
} from "@common_package";
import { PaymentProductType } from "../enums/payment-product-type.enum";
import { PaymentProductStatus } from "../enums/payment-product-status.enum";
import { IPaymentProductIntegrations } from "./paymentProduct-integrations.interface";
import { IPaymentProductPricing } from "./paymentProduct-pricing.interface";
import { IPaymentProductRecurring } from "./paymentProduct-recurring.interface";

export interface IBasePaymentProduct {
  paymentProductStatus: PaymentProductStatus;
  productType: PaymentProductType;
  name: string;
  description?: string;
  image?: IFileMetadata;
  video?: IFileMetadata;
  relatedFeatures: string[];
  restrictedFeatures: string[];
  baseCurrency: Currency;
  /**
   * productType: product => Use DiscountedPrice+ShippingPrice
   * productType: service => Use DiscountedPrice
   * This is used if the type of the PaymentProduct is `product` or `service`
   */
  pricing?: IPaymentProductPricing;
  hasShipping: boolean;
  shippingPrice?: number;
  /**
   * values: -1: infinity, 0, 1+
   */
  quota: number;
  /**
   * max number of product that can be bought
   */
  maxCount: number;
  /**
   * is sold, can not be sold
   */
  soldOut: boolean;
  isRefundable: boolean;
  /**
   * if the product is `subscription`, this is used
   */
  isUpgradable?: boolean;
  /**
   * if the product is `subscription`, this is used
   */
  recurring?: IPaymentProductRecurring;
  /**
   * reference code/id is stored here for external integrations like iyzico,
   */
  integrations?: IPaymentProductIntegrations;
}

export interface IBasePaymentProductEntity
  extends IEntity,
    IBasePaymentProduct {}

export interface IPaymentProduct
  extends IBasePaymentProductEntity,
    IHasOptionalUserAudit,
    IHasTimeStamp {}
