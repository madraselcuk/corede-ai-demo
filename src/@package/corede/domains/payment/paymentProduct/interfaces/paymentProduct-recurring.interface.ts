import { IPaymentProductPricing } from './paymentProduct-pricing.interface';
import { IPaymentProductRecurringIntegrations } from './paymentProduct-integrations.interface';
import { IHasOptionalTimeStamp } from '@common_package';
import { MainSubscription } from '../enums';
import { RecurringInterval } from '../../common';

export interface IRecurringEntitlements {
  /**
   * max number of users an organization can have. includes the admin
   */
  userLimit?: number;
  /**
   * max disc space/storage of the organization
   */
  storageLimit?: number;
}

export interface IRecurring extends IHasOptionalTimeStamp {
  packageName: string;
  interval: RecurringInterval;
  pricing: IPaymentProductPricing;
  entitlements?: IRecurringEntitlements;
  integrations?: IPaymentProductRecurringIntegrations;
}

export interface IPaymentProductRecurring {
  mainSubscription: MainSubscription;
  /**
   * this represent the hierarchical level of the subscriptions in the same mainSubscription
   * - used for : downgrade, upgrade
   * - upgrade: An organization purchasing a higher level subscription in the same mainSubscription
   * - downgrade: An organization purchasing a lower level subscription in the same mainSubscription
   * - replacement: An organization purchasing an equal level subscription in the same mainSubscription
   * - this value has no effect for different mainSubscription
   *
   */
  level: number;
  daily?: IRecurring;
  weekly?: IRecurring;
  monthly?: IRecurring;
  yearly?: IRecurring;
}
