import { INotificationChannel } from './notification-channel.interface';
import { ITemplatedNotificationChannel } from './templated-notification-channel.interface';

export interface INotificationChannelData {
  email?: ITemplatedNotificationChannel;
  sms?: INotificationChannel;
  push?: INotificationChannel;
  web?: INotificationChannel;
}

export interface INotificationChannelVariableValues {
  email?: string[];
  sms?: string[];
  push?: string[];
  web?: string[];
}
