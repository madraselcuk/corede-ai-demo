import { IHasOptionalDepartmentId } from "@corede_package"
import { ProjectPriority, ProjectStatus } from '../../enums'

export interface IProjectCreateInput extends IHasOptionalDepartmentId {
  title: string
  description?: string
  tags: string[]
  status: ProjectStatus
  progress?: number
  priority?: ProjectPriority
  assigneeIds?: string[]
  followerIds?: string[]
  mainProjectId?: string
  parentProjectId?: string
  clientOrganizationId?: string

  startDate: Date
  dueDate: Date
}
