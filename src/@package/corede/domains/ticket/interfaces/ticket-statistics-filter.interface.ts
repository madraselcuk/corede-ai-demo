import { IFilter } from '@common_package';

export interface IFilterTicketStatistics extends IFilter {
  organizationIds?: string[];
  departmentIds?: string[];
}
