import { ICommonBaseUserEntity } from '@common_package'

export interface IStatusUpdateHistory {
  newStatus: string
  prevStatus: string
  note?: string
  updatedBy?: ICommonBaseUserEntity // TODO: convert this to UserDisplayable
  updatedAt: Date
}

export interface IHasOptionalUpdateStatusUpdateHistory {
  statusHistory?: IStatusUpdateHistory[]
}
