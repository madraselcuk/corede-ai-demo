import { IFilterPolicy } from '../../interfaces/policy-filter.interface';
import { IHasFilter, IHasPagination, IPagination } from '@common_package';

export interface IPoliciesInput
  extends IHasPagination<IPagination>,
    IHasFilter<IFilterPolicy> {}
