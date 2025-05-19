import { IHasFilter, IHasPagination, IPagination } from '@common_package';
import { IFilterOrganizationSettings } from '../../interfaces';

export interface IOrganizationSettingsListInput
  extends IHasPagination<IPagination>,
    IHasFilter<IFilterOrganizationSettings> {}
