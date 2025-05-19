import { IFilter } from '@common_package';
import { IHasOptionalOrganizationId } from '../../organization/interfaces';

export interface IFilterOrganizationSettings
  extends IFilter,
    IHasOptionalOrganizationId {}
