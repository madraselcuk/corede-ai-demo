import { IPaginated } from "@common_package";
import { IWebNotificationListItemResult } from "./webNotification-list.item.result";

export interface IWebNotificationListResult extends IPaginated<IWebNotificationListItemResult> {}
