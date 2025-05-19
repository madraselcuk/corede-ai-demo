import { IPaginated } from "@common_package";
import { IOrderListItemResult } from "./order-list.item.result";

export interface IOrderListResult extends IPaginated<IOrderListItemResult> {}
