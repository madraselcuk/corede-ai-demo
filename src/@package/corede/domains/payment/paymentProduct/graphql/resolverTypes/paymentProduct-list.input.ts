import { IHasFilter, IHasPagination, IPagination } from '@common_package';
import { IFilterPaymentProduct } from '../../interfaces';

export interface IPaymentProductListInput
  extends IHasPagination<IPagination>,
    IHasFilter<IFilterPaymentProduct> {}
