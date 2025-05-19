import { IBaseTranslation } from '@common_package';
import { NotificationChannelType } from '../enums/notification-channel-type.enum';

export interface ITemplatedNotificationChannel {
  type: NotificationChannelType;
  subject?: IBaseTranslation;
  content: string;
  contentLocaleVariables?: IContentLocaleVariable[];
  variables?: string[];
}

export interface IContentLocaleVariable {
  name: string;
  value: IBaseTranslation;
}
