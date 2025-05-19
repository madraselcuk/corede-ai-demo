import { IDateFilter, IFilter, Language } from "@common_package";
import { NotificationHistoryStatus } from "../enums";
import { IHasOptionalOrganizationId } from "../../../user";
import { NotificationChannelType } from "../../notification";

export interface IFilterNotificationHistory
  extends IFilter,
    IHasOptionalOrganizationId {
  statuses?: NotificationHistoryStatus[];
  notificationId?: string;
  notificationName?: string;
  channelTypes?: NotificationChannelType[];
  senderUserId?: string;
  sentUserId?: string;
  updatedAtDateFilter?: IDateFilter;
  languages?: Language[];
}
