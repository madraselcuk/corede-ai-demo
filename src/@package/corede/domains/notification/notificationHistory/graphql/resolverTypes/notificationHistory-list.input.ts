import { IHasFilter, IHasPagination, IPagination } from '@common_package';
import { IFilterNotificationHistory } from '../../interfaces';

export interface INotificationHistoryListInput
  extends IHasPagination<IPagination>,
    IHasFilter<IFilterNotificationHistory> {}
