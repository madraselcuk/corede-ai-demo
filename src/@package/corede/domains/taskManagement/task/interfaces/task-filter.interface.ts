import { IDateFilter, IFilter } from '@common_package'
import { TaskPriority, TaskRelatedEntityType, TaskStatus } from '../enums'
import {
  IHasOptionalOrganizationId,
  IHasOptionalDepartmentId,
  IHasOptionalCreatedById,
} from '@corede_package'

export interface IFilterTask
  extends IFilter,
    IHasOptionalOrganizationId,
    IHasOptionalDepartmentId,
    IHasOptionalCreatedById {
  searchText?: string
  title?: string
  tags?: string[]
  isCompleted?: boolean
  statuses?: TaskStatus[]
  // TODO is there a range filter interface?
  // progress?: IRangeFilter
  priorities?: TaskPriority[]
  assigneeIds?: string[]
  followerIds?: string[]
  parentTaskId?: string
  childTaskIds?: string[]

  relatedEntityId?: string
  relatedEntityType?: TaskRelatedEntityType

  updatedAtDateFilter?: IDateFilter

  clientOrganizationId?: string
}
