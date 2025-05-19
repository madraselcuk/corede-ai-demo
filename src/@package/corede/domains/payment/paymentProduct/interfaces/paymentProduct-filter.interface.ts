import { IDateFilter, IFilter } from '@common_package';
import { PaymentProductStatus } from '../enums/payment-product-status.enum';
import { PaymentProductType } from '../enums/payment-product-type.enum';

export interface IFilterPaymentProduct extends IFilter {
  paymentProductStatuses?: PaymentProductStatus[];
  paymentProductTypes?: PaymentProductType[];
  name?: string;
  hasShipping?: boolean;
  soldOut?: boolean;
  isRefundable?: boolean;
  isUpgradable?: boolean;
  createdById?: string;
  updatedAtDateFilter?: IDateFilter;
}
