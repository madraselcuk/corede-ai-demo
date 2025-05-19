import { IBaseTranslation } from '@common_package';
import { NotificationChannelType } from '../../enums';
import { ITemplatedNotificationChannelInput } from './templated-notification-channel.input';

export interface INotificationChannelDataInput {
  email?: ITemplatedNotificationChannelInput;
  sms?: INotificationChannelInput;
  push?: INotificationChannelInput;
  web?: INotificationChannelInput;
}

export interface INotificationChannelInput {
  type: NotificationChannelType;
  subject?: IBaseTranslation;
  content: IBaseTranslation;
  variables?: string[];
}
