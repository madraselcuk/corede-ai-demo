import { Language } from "@common_package";
import { NotificationType } from "../../../notification";
import { IWebNotificationPreview } from "../../interfaces/webNotification-preview.interface";

export interface IWebNotificationCreateInput {
  notificationId: string;
  notificationType: NotificationType;
  notificationPreview: IWebNotificationPreview;
  userId?: string;
  isRead: boolean;
  language: Language;
}
