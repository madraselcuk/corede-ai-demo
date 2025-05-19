import { IHasFilter, IHasPagination, IPagination } from '@common_package';
import { IFilterSubscription } from '../../interfaces';

export interface ISubscriptionListInput
  extends IHasPagination<IPagination>,
    IHasFilter<IFilterSubscription> {}
