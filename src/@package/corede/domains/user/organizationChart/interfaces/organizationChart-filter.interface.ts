import { IFilter } from '@common_package';
import { IHasOptionalOrganizationId } from '../../organization';

export interface IFilterOrganizationChart
  extends IFilter,
    IHasOptionalOrganizationId {}
