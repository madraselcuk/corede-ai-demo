import { IHasFilter, IHasPagination, IPagination } from '@common_package';
import { IFilterWebNotification } from '../../interfaces';

export interface IWebNotificationListInput
  extends IHasPagination<IPagination>,
    IHasFilter<IFilterWebNotification> {}
