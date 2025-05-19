import { IAllowedNotificationChannel } from './allowed-notification-channel.interface';

export interface IAllowedNotifications {
  all: IAllowedNotificationChannel;
  allowedSubjectsByEmail: string[];
  allowedSubjectsBySms: string[];
  allowedSubjectsByPush: string[];
  allowedSubjectsByWeb: string[];
}
