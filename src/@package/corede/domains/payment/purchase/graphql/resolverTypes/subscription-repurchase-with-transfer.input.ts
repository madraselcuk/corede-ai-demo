import { Currency } from "@common_package";

export interface ISubscriptionRepurchaseWithTransferInput {
  subscriptionId: string;
  currency?: Currency;
  discountRate?: number;
}
