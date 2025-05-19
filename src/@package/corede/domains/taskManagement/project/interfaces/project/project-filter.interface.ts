import { IDateFilter, IFilter } from '@common_package'
import { ProjectPriority, ProjectStatus } from '../../enums'
import {
  IHasOptionalOrganizationId,
  IHasOptionalDepartmentId,
  IHasOptionalCreatedById,
} from '@corede_package'

export interface IFilterProject
  extends IFilter,
    IHasOptionalOrganizationId,
    IHasOptionalDepartmentId,
    IHasOptionalCreatedById {
  title?: string
  description?: string
  tags?: string[]
  isMain?: boolean
  statuses?: ProjectStatus[]
  // TODO is there a range filter interface?
  // progress?: IRangeFilter
  priority?: ProjectPriority
  milestoneIds?: string[]
  assigneeIds?: string[]
  followerIds?: string[]
  mainProjectId?: string
  parentProjectId?: string
  childProjectIds?: string[]
  updatedAtDateFilter?: IDateFilter
}
