import { IBaseTranslation } from '@common_package';
import { NotificationChannelType } from '../../enums';
import { ITemplatedNotificationChannelUpdateInput } from './templated-notification-channel-update.input';
export interface INotificationChannelDataUpdateInput {
  email?: ITemplatedNotificationChannelUpdateInput;
  sms?: INotificationChannelUpdateInput;
  push?: INotificationChannelUpdateInput;
  web?: INotificationChannelUpdateInput;
}

export interface INotificationChannelUpdateInput {
  type: NotificationChannelType;
  subject?: IBaseTranslation;
  content: IBaseTranslation;
  variables?: string[];
}
