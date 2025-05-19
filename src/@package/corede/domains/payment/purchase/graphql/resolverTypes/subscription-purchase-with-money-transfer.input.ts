import { Currency } from "@common_package";
import { RecurringInterval } from "../../../common";

export interface ISubscriptionPurchaseWithMoneyTransferInput {
  organizationId: string,
  purchaserUserId: string,
  productId: string;
  recurringInterval: RecurringInterval;
  currency: Currency;
  discountRate?: number;
}
