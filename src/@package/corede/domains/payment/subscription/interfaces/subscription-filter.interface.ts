import { IDateFilter, IFilter } from '@common_package';
import { SubscriptionStatus } from '../enums/subscription-status';
import { IHasOptionalOrganizationId } from '../../../user';

export interface IFilterSubscription
  extends IFilter,
    IHasOptionalOrganizationId {
  statuses?: SubscriptionStatus[];
  nextPaymentDateFilter?: IDateFilter;
  updatedAtDateFilter?: IDateFilter;
}
