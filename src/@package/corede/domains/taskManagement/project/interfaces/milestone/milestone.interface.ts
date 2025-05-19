import { IEntity, IHasTimeStamp, IHasOptionalUserAudit } from '@common_package'
import { ITask } from '../../../task'

export interface IBaseMilestone {
  title: string
  description?: string
  tags: string[]
  tasks: ITask[]
  order: number
  startDate: Date
  dueDate: Date
}

export interface IBaseMilestoneEntity extends IEntity, IBaseMilestone {}

export interface IMilestone
  extends IBaseMilestoneEntity,
    IHasTimeStamp,
    IHasOptionalUserAudit {}
