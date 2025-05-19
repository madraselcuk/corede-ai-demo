import { IFilterOrganization } from '../../interfaces/organization-filter.interface';
import { IHasFilter, IHasPagination, IPagination } from '@common_package';

export interface IOrganizationListInput
  extends IHasPagination<IPagination>,
    IHasFilter<IFilterOrganization> {}
