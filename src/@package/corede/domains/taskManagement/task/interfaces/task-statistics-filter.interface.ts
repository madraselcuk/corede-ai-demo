import { IFilter } from '@common_package'

export interface IFilterTaskStatistics extends IFilter {
  organizationIds?: string[]
  departmentIds?: string[]

  numberOfPastDays?: number
}
