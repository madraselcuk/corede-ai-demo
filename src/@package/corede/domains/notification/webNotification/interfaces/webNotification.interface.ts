import {
  IEntity,
  IHasTimeStamp,
  IHasOptionalUserAudit,
  Language,
} from "@common_package";
import { IWebNotificationPreview } from "./webNotification-preview.interface";
import { NotificationType } from "../../notification";

export interface IBaseWebNotification {
  notification: IEntity;
  notificationType: NotificationType;
  notificationPreview: IWebNotificationPreview;
  user: IEntity;
  isRead: boolean;
  language: Language;
}

export interface IBaseWebNotificationEntity
  extends IEntity,
    IBaseWebNotification {}

export interface IWebNotification
  extends IBaseWebNotificationEntity,
    IHasTimeStamp,
    IHasOptionalUserAudit {}
