import { IPaginated } from "@common_package";
import { INotificationHistoryListItemResult } from "./notificationHistory-list.item.result";

export interface INotificationHistoryListResult extends IPaginated<INotificationHistoryListItemResult> {}
