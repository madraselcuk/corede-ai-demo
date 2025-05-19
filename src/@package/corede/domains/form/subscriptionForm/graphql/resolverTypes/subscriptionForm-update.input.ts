import { IEntity, Language } from '@common_package';
import { SubscriptionFormUserType } from '../../enums/subscription-form-user-type.enum';

export interface ISubscriptionFormUpdateFilterInput extends IEntity {}

export interface ISubscriptionFormUpdateInput {
  email?: string;
  userType?: SubscriptionFormUserType;
  language?: Language;
  page?: string;
  newsTopicSubscribed?: boolean;
  blogTopicSubscribed?: boolean;
  productTopicSubscribed?: boolean;
  offerTopicSubscribed?: boolean;
}
