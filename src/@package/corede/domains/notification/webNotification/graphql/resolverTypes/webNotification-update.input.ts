import { IEntity, Language } from "@common_package";
import { IWebNotificationPreview } from "../../interfaces/webNotification-preview.interface";
import { NotificationType } from "../../../notification";

export interface IWebNotificationUpdateFilterInput extends IEntity {}

export interface IWebNotificationUpdateInput {
  notificationId?: string;
  notificationType?: NotificationType;
  notificationPreview?: IWebNotificationPreview;
  userId?: string;
  isRead?: boolean;
  language?: Language;
}
