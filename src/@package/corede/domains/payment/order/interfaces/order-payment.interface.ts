import { IEntity, IHasTimeStamp } from "@common_package";
import { OrderPaymentStatus } from "../enums";
import { PaymentMethod, PaymentType } from "../../common";

/**
 * @property `apiPaymentId` unique Id returned from payment integration api. Used to query info from integration
 * @property `conversationId` unique Id given by us and returned from integration. Used to query info from integration
 * @property `apiPayment` information retrieved from api call which need to be stored
 * @property `checkoutFormToken` token used in the checkoutForm payment type
 */
export interface IOrderPayment extends IEntity, IHasTimeStamp {
  paymentStatus: OrderPaymentStatus;
  paymentMethod: PaymentMethod;
  paymentType: PaymentType;
  conversationId?: string;
  apiPaymentId?: string;
  apiPayment?: any;
  checkoutFormToken?: string;
  error?: any;
}

export interface IOrderPaymentInput
  extends Omit<IOrderPayment, "_id" | "createdAt" | "updatedAt"> {}
