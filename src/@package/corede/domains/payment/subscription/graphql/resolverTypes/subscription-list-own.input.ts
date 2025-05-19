import { IHasFilter, IHasPagination, IPagination } from '@common_package';
import { IFilterSubscription } from '../../interfaces';

export interface ISubscriptionListOwnInput
  extends IHasPagination<IPagination>,
    IHasFilter<IFilterSubscription> {}
