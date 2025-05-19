import { IBaseTranslation } from "@common_package";
import { NotificationChannelType } from "../enums/notification-channel-type.enum";

export interface INotificationChannel {
  type: NotificationChannelType;
  subject?: IBaseTranslation;
  content: IBaseTranslation;
  variables?: string[];
}
