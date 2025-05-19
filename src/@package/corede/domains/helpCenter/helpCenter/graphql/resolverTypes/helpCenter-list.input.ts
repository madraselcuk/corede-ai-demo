import { IFilterHelpCenter } from '../../interfaces/helpCenter-filter.interface';
import { IHasFilter, IHasPagination, IPagination } from '@common_package';

export interface IHelpCenterListInput
  extends IHasPagination<IPagination>,
    IHasFilter<IFilterHelpCenter> {}
