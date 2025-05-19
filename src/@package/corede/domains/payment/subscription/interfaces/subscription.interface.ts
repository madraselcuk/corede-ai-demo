import {
  IEntity,
  IHasTimeStamp,
  IHasOptionalUserAudit,
  Currency,
  IBaseError,
} from "@common_package";
import { SubscriptionStatus } from "../enums/subscription-status";
import { IHasOrganization, IOrganization } from "../../../user";
import { RecurringInterval } from "../../common";
import { IBaseOrder } from "../../order";
import { IBasePaymentProductEntity } from "../../paymentProduct";
import {
  IStatusUpdateHistory,
} from "../../..";

export interface IBaseSubscription {
  status: SubscriptionStatus;
  paymentProduct: IBasePaymentProductEntity;
  recurringInterval: RecurringInterval;
  currency: Currency;
  orders: IBaseOrder[];
  failedOrders: IBaseOrder[];
  startDate: Date;
  /**
   * if undefined, subscription will continue indefinitely
   */
  totalRecurrentCount?: number;
  /**
   * this number should be equal to size of `orders` array.
   * Because when a subscription payment is successful, resulting order is inserted to `orders` array and this field is incremented by 1
   */
  currentRecurrentCount: number;
  /**
   * cardToken to be used for purchase of this subscription.
   * - for now, only iyzico card token is used for here
   */
  savedCardToken?: string;
  /**
   * willRepurchaseWithNon3ds of the subscription
   * - if true and there is card saved in the `savedCardToken` field, repurchase will be done using non-3ds without customer's action
   * - if false, repurchase should be done manually using 3ds regardless of a card is saved or not in the `savedCardToken`
   * -- if there is card saved, use that card in 3ds payment,
   * -- if there is no card saved, first make him save his card then repurchase with 3ds
   *
   * @note if this value is true, this means that 3ds must be used in this payment. non-3ds is not an option
   */
  willRepurchaseWithNon3ds?: boolean;
  /**
   * will have date, if purchase for subscription will take place
   */
  nextPaymentDate?: Date;
  /**
   * will have date, if subscription is completed, manually or automatically when totalRecurrentCount is reached
   */
  completedDate?: Date;
  /**
   * will have date, if subscription failed
   */
  failedDate?: Date;
  /**
   * - When a subscription payment could not be done, this will have failed order for failed payment attempts.
   * If payment is done after retrials, this will be erased,
   * - the size of this array represent the number of failed purchase attempts in the retry period
   * Because when a subscription payment failed, resulting order is inserted to `failedOrdersForCurrentSession` array and this field is incremented by 1
   */
  failedOrdersForCurrentSession: IBaseOrder[];

  /**
   * this error is used to show current error of the subscription and will be shown to the user, if there is any error.
   */
  error?: IBaseError;

  statusHistory: IStatusUpdateHistory[];
}

export interface IBaseSubscriptionEntity extends IEntity, IBaseSubscription {}

export interface ISubscription
  extends IBaseSubscriptionEntity,
    IHasOrganization<IOrganization>,
    IHasTimeStamp,
    IHasOptionalUserAudit {}
