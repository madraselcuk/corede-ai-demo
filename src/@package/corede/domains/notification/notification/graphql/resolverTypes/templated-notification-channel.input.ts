import { IBaseTranslation } from '@common_package';
import { NotificationChannelType } from '../../enums';

export interface ITemplatedNotificationChannelInput {
  type: NotificationChannelType;
  subject?: IBaseTranslation;
  content: string;
  contentLocaleVariables?: IContentLocaleVariableInput[];
  variables?: string[];
}

export interface IContentLocaleVariableInput {
  name: string;
  value: IBaseTranslation;
}
