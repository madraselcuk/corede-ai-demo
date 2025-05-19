import { IEntity } from '@common_package';
import { NotificationType } from '../../enums';
import { INotificationChannelDataInput } from './notification-channel.input';

export interface INotificationUpdateFilterInput extends IEntity {}

export interface INotificationUpdateInput {
  name?: string;
  type?: NotificationType;
  domain?: string;
  channels?: INotificationChannelDataInput;
}
