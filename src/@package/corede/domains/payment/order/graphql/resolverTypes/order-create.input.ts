import { IHasOptionalOrganizationId } from "../../../../user";
import { OrderTarget, OrderStatus } from "../../enums";
import { IOrderError, IOrderPrice, IOrderProduct } from "../../interfaces";
import { IOrderPaymentInput } from "../../interfaces/order-payment.interface";

export interface IOrderCreateInput extends IHasOptionalOrganizationId {
  orderTarget: OrderTarget;
  orderStatus: OrderStatus;
  error?: IOrderError;
  orderedUserId?: string;
  products: IOrderProduct[];
  totalPrice: IOrderPrice;
  payment?: IOrderPaymentInput;
}
