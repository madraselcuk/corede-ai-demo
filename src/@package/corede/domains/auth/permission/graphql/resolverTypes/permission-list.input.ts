import { IHasFilter, IHasPagination, IPagination } from '@common_package';
import { IFilterPermission } from '../../interfaces/permission-filter.interface';

export interface IPermissionListInput
  extends IHasPagination<IPagination>,
    IHasFilter<IFilterPermission> {}
