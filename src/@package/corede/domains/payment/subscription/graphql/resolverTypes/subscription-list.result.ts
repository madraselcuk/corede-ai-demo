import { IPaginated } from "@common_package";
import { ISubscriptionListItemResult } from "./subscription-list.item.result";

export interface ISubscriptionListResult extends IPaginated<ISubscriptionListItemResult> {}
