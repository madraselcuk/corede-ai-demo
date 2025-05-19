import { IPaginated } from '@common_package';
import { IReminderListItemResult } from './reminder-list.item.result';

export interface IReminderListResult
  extends IPaginated<IReminderListItemResult> {}
