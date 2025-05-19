import { IFilter } from '@common_package'

export interface IFilterMilestone extends IFilter {
  title?: string
  tags?: string[]
}
