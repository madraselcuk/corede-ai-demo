import { IPaginated } from '@common_package';
import { IBaseHelpCenterCategoryEntity } from '../../interfaces';

export interface IHelpCenterCategoryListItemResult extends IBaseHelpCenterCategoryEntity {
  hasSubHelpCenterCategory: boolean;
}

export interface IHelpCenterCategoryListResult
  extends IPaginated<IHelpCenterCategoryListItemResult> {}
