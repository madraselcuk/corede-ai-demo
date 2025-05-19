import { IPaginated } from '@common_package';
import { IDepartmentListItemResult } from './department-list-item.result';

export interface IDepartmentListResult
  extends IPaginated<IDepartmentListItemResult> {}
