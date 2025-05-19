import {
  IEntity,
  IHasTimeStamp,
  IHasOptionalUserAudit,
  IUserProfile,
} from '@common_package'
import { ProjectPriority } from '../../enums'

import { ProjectStatus } from '../../enums/project-status.enum'
import {
  IComment,
  IHasDocuments,
  IHasOptionalDepartment,
  IHasOptionalOrganization,
  INote,
} from '@corede_package'
import { IMilestone } from '../milestone'

export interface IBaseProject {
  title: string
  description?: string
  tags?: string[]
  isMain: boolean
  status: ProjectStatus
  progress: number
  priority: ProjectPriority
  assignees: IUserProfile[]
  followers: IUserProfile[]
  comments: IComment[]
  notes: INote[]
  mainProject?: IProject
  parentProject?: IProject
  childProjects: IProject[]
  clientOrganization?: IEntity
  startDate: Date
  dueDate: Date

  milestones: IMilestone[]
}

export interface IBaseProjectEntity extends IEntity, IBaseProject {}

export interface IProject
  extends IBaseProjectEntity,
    IHasDocuments,
    IHasOptionalOrganization,
    IHasOptionalDepartment,
    IHasTimeStamp,
    IHasOptionalUserAudit {}
