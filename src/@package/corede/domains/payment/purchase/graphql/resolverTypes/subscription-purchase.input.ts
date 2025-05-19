import { RecurringInterval } from "../../../common";

export interface ISubscriptionPurchaseInput {
  registeredCardToken: string;
  productId: string;
  recurringInterval: RecurringInterval;
  currency: string;
}
