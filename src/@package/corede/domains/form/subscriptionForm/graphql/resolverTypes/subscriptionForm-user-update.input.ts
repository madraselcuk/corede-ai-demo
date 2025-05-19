import { Language } from '@common_package';
import { SubscriptionFormCreateUserType } from '../../enums';

export interface ISubscriptionFormUserUpdateInput {
  email?: string;
  userType?: SubscriptionFormCreateUserType;
  language?: Language;
  newsTopicSubscribed?: boolean;
  blogTopicSubscribed?: boolean;
  productTopicSubscribed?: boolean;
  offerTopicSubscribed?: boolean;
}
