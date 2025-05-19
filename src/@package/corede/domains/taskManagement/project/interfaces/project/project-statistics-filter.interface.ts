import { IFilter } from '@common_package'

export interface IFilterProjectStatistics extends IFilter {
  organizationIds?: string[]
  departmentIds?: string[]
}
