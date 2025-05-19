import { IHasFilter, IHasPagination, IPagination } from '@common_package';
import { IFilterCity } from '../../interfaces';

export interface ICityListInput
  extends IHasPagination<IPagination>,
    IHasFilter<IFilterCity> {}
