import { IEntity } from '@common_package'
import { TaskStatus } from '../enums'

export interface ITaskDisplay extends IEntity {
  title: string
  status: TaskStatus
  progress: number
}
