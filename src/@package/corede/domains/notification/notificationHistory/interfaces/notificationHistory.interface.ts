import {
  IEntity,
  IHasTimeStamp,
  IHasOptionalUserAudit,
  Language,
} from "@common_package";
import { NotificationHistoryStatus } from "../enums";
import { INotification, NotificationChannelType } from "../../notification";
import { IHasOptionalOrganization } from "../../../user";

export interface IBaseNotificationHistory {
  status: NotificationHistoryStatus;
  notification?: INotification;
  customNotification?: any;
  channelType: NotificationChannelType;
  variableValues?: string[];
  results: any[];
  isSentToTopic: boolean;
  sentTopic?: string /** Topic name - unique in Topic document */;
  senderUser?: IEntity;
  sentUser?: IEntity;
  sentCustomUser?: any;
  language: Language;
}

export interface IBaseNotificationHistoryEntity
  extends IEntity,
    IBaseNotificationHistory {}

export interface INotificationHistory
  extends IBaseNotificationHistoryEntity,
    IHasOptionalOrganization,
    IHasTimeStamp,
    IHasOptionalUserAudit {}
