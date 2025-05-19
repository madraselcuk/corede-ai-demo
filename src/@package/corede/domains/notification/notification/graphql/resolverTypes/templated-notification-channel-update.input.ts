import { IBaseTranslation } from '@common_package';

export interface ITemplatedNotificationChannelUpdateInput {
  subject?: IBaseTranslation;
  content?: string;
  contentLocaleVariables?: IContentLocaleVariableUpdateInput[];
  variables?: string[];
}

export interface IContentLocaleVariableUpdateInput {
  name: string;
  value: IBaseTranslation;
}
