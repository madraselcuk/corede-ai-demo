import { NotificationChannelType } from '../enums';

export type IAllowedNotificationChannel = {
  [key in NotificationChannelType]?: boolean;
};
