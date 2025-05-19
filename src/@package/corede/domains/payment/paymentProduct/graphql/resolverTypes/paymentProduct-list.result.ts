import { IPaginated } from "@common_package";
import { IPaymentProductListItemResult } from "./paymentProduct-list.item.result";

export interface IPaymentProductListResult extends IPaginated<IPaymentProductListItemResult> {}
