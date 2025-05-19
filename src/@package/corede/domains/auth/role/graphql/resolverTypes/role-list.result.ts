import { IPaginated } from '@common_package';
import { IRoleListItemResult } from './role-list-item.result';

export interface IRoleListResult extends IPaginated<IRoleListItemResult> {}
