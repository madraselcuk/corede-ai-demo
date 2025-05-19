import { IPaginated } from "@common_package";
import { INotificationListItemResult } from "./notification-list.item.result";

export interface INotificationListResult extends IPaginated<INotificationListItemResult> {}
