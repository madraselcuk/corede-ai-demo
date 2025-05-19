import { Language } from '@common_package';

export interface ISubscriptionFormPublicUpdateFilterInput {
  email: string;
}

export interface ISubscriptionFormPublicUpdateInput {
  email?: string;
  language?: Language;
  newsTopicSubscribed?: boolean;
  blogTopicSubscribed?: boolean;
  productTopicSubscribed?: boolean;
  offerTopicSubscribed?: boolean;
}
