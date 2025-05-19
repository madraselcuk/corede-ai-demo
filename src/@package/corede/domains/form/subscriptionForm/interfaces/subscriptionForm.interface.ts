import { IHasOptionalUpdateStatusUpdateHistory } from '../../../../';
import {
  IEntity,
  IHasTimeStamp,
  IHasOptionalUserAudit,
  Language,
  IBaseUserEntity,
} from '@common_package';
import { SubscriptionFormStatus } from '../enums/subscription-form-status.enum';
import { SubscriptionFormUserType } from '../enums/subscription-form-user-type.enum';

export interface ISubscriptionFormTopicSubscription {
  newsTopicSubscribed: boolean;
  blogTopicSubscribed: boolean;
  productTopicSubscribed: boolean;
  offerTopicSubscribed: boolean;
}

export interface IBaseSubscriptionForm
  extends ISubscriptionFormTopicSubscription,
    IHasOptionalUpdateStatusUpdateHistory {
  email: string; // unique
  userType: SubscriptionFormUserType;
  status: SubscriptionFormStatus;
  language: Language;
  page?: string;

  user?: IBaseUserEntity;
}

export interface IBaseSubscriptionFormEntity
  extends IEntity,
    IBaseSubscriptionForm {}

export interface ISubscriptionForm
  extends IBaseSubscriptionFormEntity,
    IHasTimeStamp,
    IHasOptionalUserAudit {}
