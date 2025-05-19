import { IBaseError } from '@common_package'
import { ISubscription, SubscriptionStatus } from '../../../payment'

export interface IUsageLimit {
  current: number
  total: number
}

export interface ITrialSubscription {
  status: SubscriptionStatus
  startDate: Date
  dueDate: Date
  error?: IBaseError
}

export interface IOrganizationActiveSubscriptions {
  main?: ISubscription
  trial?: ITrialSubscription
  userUsageLimit?: IUsageLimit
  storageUsageLimit?: IUsageLimit
}
