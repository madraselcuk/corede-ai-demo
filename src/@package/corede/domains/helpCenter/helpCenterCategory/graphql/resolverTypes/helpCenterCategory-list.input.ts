import { IFilterHelpCenterCategory } from '../../interfaces/helpCenterCategory-filter.interface';
import { IHasFilter, IHasPagination, IPagination } from '@common_package';

export interface IHelpCenterCategoryListInput
  extends IHasPagination<IPagination>,
    IHasFilter<IFilterHelpCenterCategory> {}
