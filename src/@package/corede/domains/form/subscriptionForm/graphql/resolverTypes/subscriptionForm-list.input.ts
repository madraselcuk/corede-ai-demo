import { IFilterSubscriptionForm } from '../../interfaces/subscriptionForm-filter.interface';
import { IHasFilter, IHasPagination, IPagination } from '@common_package';

export interface ISubscriptionFormListInput
  extends IHasPagination<IPagination>,
    IHasFilter<IFilterSubscriptionForm> {}
