import { PaymentType } from "../../../common";
import { SubscriptionStatus } from "../../../subscription";
import { IPaymentProduct } from "../../interfaces/paymentProduct.interface";

export interface IRecurringActions {
  /**
   * if present, organization has purchased this recurring of the product before.
   */
  subscriptionStatus?: SubscriptionStatus;

  /**
   * false if the paymentProduct is not available for the user.
   * Reasons might be:
   * - already have an active subscription with the same type of product.
   * - this product can be upgraded from users active subscription so no purchase but upgrade
   */
  canBePurchased: boolean;

  /**
   * this will show possible payment types.
   * - generally only one payment type will be here
   * - but for non 3ds payment: checkoutForm and non3ds can both be here, for now.
   */
  paymentTypes?: PaymentType[];

  /**
   * true if this product can be upgraded from current product.
   * false if
   * - no upgrade is possible from current active sub
   * - this product can be purchased
   */
  willUpgrade: boolean;

  /**
   * if `canBeUpgraded` is true, this field will be present and according to the usage of current subscription, a discount will be in place
   */
  upgradeDiscount?: number;
}

export interface IPaymentProductRecurringActions {
  daily?: IRecurringActions;
  weekly?: IRecurringActions;
  monthly?: IRecurringActions;
  yearly?: IRecurringActions;
}

export interface IPaymentProductListItemResult extends IPaymentProduct {
  recurringActions: IPaymentProductRecurringActions;
}
