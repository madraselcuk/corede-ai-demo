import { RecurringInterval } from "../../common";
import { IPaymentProduct } from "../../paymentProduct";

export interface IOrderProduct {
  paymentProduct: IPaymentProduct;
  isRecurring: boolean;
  recurringInterval?: RecurringInterval;
}

export interface IOrderProductInput extends IOrderProduct {}
