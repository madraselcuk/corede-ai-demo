import { IHasDocuments, IHasOptionalDepartmentId } from '@corede_package'
import { TaskPriority, TaskStatus } from '../../enums'

export interface ITaskCreateForProjectInput
  extends Partial<IHasDocuments>,
    IHasOptionalDepartmentId {
  title: string
  description?: string
  tags?: string[]
  status: TaskStatus
  progress?: number
  priority?: TaskPriority
  assigneeIds?: string[]
  followerIds?: string[]
  parentTaskId?: string
  startDate?: Date
  dueDate?: Date

  projectId?: string

  clientOrganizationId?: string
}
