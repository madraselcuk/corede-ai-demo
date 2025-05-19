import {
  IEntity,
  IHasTimeStamp,
  IHasOptionalUserAudit,
  IUserProfile,
} from '@common_package'
import { TaskPriority, TaskRelatedEntityType, TaskStatus } from '../enums'
import {
  IHasDocuments,
  IHasOptionalDepartment,
  IHasOptionalOrganization,
  INote,
} from '@corede_package'

export interface IBaseTask {
  title: string
  description?: string
  tags: string[]
  isCompleted: boolean
  status: TaskStatus
  progress: number
  priority: TaskPriority
  assignees: IUserProfile[]
  followers: IUserProfile[]
  comments: IEntity[]
  notes: INote[]
  parentTask?: IBaseTask
  childTasks: IBaseTask[]
  startDate: Date
  dueDate: Date

  relatedEntity?: IEntity
  relatedEntityType?: TaskRelatedEntityType
}

export interface IBaseTaskEntity extends IEntity, IBaseTask {}

export interface ITask
  extends IBaseTaskEntity,
    IHasDocuments,
    IHasOptionalOrganization,
    IHasOptionalDepartment,
    IHasTimeStamp,
    IHasOptionalUserAudit<IUserProfile> {
  parentTask?: IBaseTask
  childTasks: IBaseTask[]

  clientOrganization?: IEntity
}
