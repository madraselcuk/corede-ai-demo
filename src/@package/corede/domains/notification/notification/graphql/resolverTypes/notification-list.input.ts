import { IHasFilter, IHasPagination, IPagination } from '@common_package';
import { IFilterNotification } from '../../interfaces';

export interface INotificationListInput
  extends IHasPagination<IPagination>,
    IHasFilter<IFilterNotification> {}
