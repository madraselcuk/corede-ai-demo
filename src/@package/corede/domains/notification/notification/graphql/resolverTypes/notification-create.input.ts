import { NotificationType } from '../../enums';
import { INotificationChannelDataInput } from './notification-channel.input';

export interface INotificationCreateInput {
  name: string;
  type: NotificationType;
  domain: string;
  channels: INotificationChannelDataInput;
}
