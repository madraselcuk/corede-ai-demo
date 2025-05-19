import { Language } from '@common_package';
import { SubscriptionFormUserType } from '../../enums/subscription-form-user-type.enum';

export interface ISubscriptionFormCreateInput {
  userId: string;
  language: Language;
  userType?: SubscriptionFormUserType;
  page?: string;
  newsTopicSubscribed?: boolean;
  blogTopicSubscribed?: boolean;
  productTopicSubscribed?: boolean;
  offerTopicSubscribed?: boolean;
}
