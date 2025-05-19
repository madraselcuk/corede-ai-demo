import { IEntity } from "@common_package";

export interface ISubscriptionInitializePurchaseWithCheckoutFormResult {
  order: IEntity;
  checkoutFormContent: string;
  paymentPageUrl: string;
  payWithIyzicoPageUrl: string;
}
