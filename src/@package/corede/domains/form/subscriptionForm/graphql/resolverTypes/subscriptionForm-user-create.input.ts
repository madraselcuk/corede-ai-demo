import { Language } from '@common_package';
import { SubscriptionFormCreateUserType } from '../../enums/subscription-form-create-user-type.enum';

export interface ISubscriptionFormUserCreateInput {
  language: Language;
  userType?: SubscriptionFormCreateUserType,
  page?: string;
  newsTopicSubscribed?: boolean;
  blogTopicSubscribed?: boolean;
  productTopicSubscribed?: boolean;
  offerTopicSubscribed?: boolean;
}
