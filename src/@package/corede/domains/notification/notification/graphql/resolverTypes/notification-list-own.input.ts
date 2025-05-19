import { IHasFilter, IHasPagination, IPagination } from '@common_package';
import { IFilterNotification } from '../../interfaces';

export interface INotificationListOwnInput
  extends IHasPagination<IPagination>,
    IHasFilter<IFilterNotification> {}
