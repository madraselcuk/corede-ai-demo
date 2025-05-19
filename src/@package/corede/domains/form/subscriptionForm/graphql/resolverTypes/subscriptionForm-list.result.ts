import { IPaginated } from '@common_package'
import { ISubscriptionForm } from '../../interfaces'

export interface ISubscriptionFormListItemResult extends ISubscriptionForm {}

export interface ISubscriptionFormListResult
  extends IPaginated<ISubscriptionFormListItemResult> {}
