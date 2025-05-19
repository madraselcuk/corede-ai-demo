import { IPaginated } from '@common_package';
import { IBaseFaqCategoryEntity } from '../../interfaces';

export interface IFaqCategoryListItemResult extends IBaseFaqCategoryEntity {
  hasSubFaqCategory: boolean;
}

export interface IFaqCategoryListResult
  extends IPaginated<IFaqCategoryListItemResult> {}
