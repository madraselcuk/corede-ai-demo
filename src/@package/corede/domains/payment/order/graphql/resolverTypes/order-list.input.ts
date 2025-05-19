import { IHasFilter, IHasPagination, IPagination } from '@common_package';
import { IFilterOrder } from '../../interfaces';

export interface IOrderListInput
  extends IHasPagination<IPagination>,
    IHasFilter<IFilterOrder> {}
