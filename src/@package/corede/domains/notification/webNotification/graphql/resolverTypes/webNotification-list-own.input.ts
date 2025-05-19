import { IHasFilter, IHasPagination, IPagination } from '@common_package';
import { IFilterWebNotification } from '../../interfaces';

export interface IWebNotificationListOwnInput
  extends IHasPagination<IPagination>,
    IHasFilter<IFilterWebNotification> {}
