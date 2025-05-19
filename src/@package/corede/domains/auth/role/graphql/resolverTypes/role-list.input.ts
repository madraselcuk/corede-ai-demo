import { IHasFilter, IHasPagination, IPagination } from '@common_package';
import { IFilterRole } from '../../interfaces/role-filter.interface';

export interface IRoleListInput
  extends IHasPagination<IPagination>,
    IHasFilter<IFilterRole> {}
