import { IDateFilter, IFilter } from '@common_package';
import { NotificationType } from '../../notification';

export interface IFilterWebNotification extends IFilter {
  notificationId?: string;
  notificationTypes?: NotificationType[];
  userIds?: string[];
  updatedAtDateFilter?: IDateFilter;
  isRead?: boolean;
}

export interface IFilterWebNotificationOwn
  extends Omit<IFilterWebNotification, 'userIds' | 'createdBy'> {}
