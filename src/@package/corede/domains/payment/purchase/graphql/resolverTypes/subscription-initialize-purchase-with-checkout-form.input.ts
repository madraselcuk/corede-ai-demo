import { Currency } from "@common_package";
import { RecurringInterval } from "../../../common";

export interface ISubscriptionInitializePurchaseWithCheckoutFormInput {
  productId: string;
  recurringInterval: RecurringInterval;
  currency: Currency;
}
