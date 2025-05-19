import { IFilterDepartment } from '../../interfaces/department-filter.interface';
import { IHasFilter, IHasPagination, IPagination } from '@common_package';

export interface IDepartmentListInput
  extends IHasPagination<IPagination>,
    IHasFilter<IFilterDepartment> {}
