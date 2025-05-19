import { IDateFilter, IFilter } from '@common_package';
import { NotificationType } from '../enums';

export interface IFilterNotification extends IFilter {
  name?: string;
  types?: NotificationType[];
  domains?: string[];
  updatedAtDateFilter?: IDateFilter;
}
