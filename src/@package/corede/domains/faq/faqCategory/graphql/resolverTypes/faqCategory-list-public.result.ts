import { IPaginated } from '@common_package';
import { IBaseFaqCategoryEntity } from '../../interfaces';

export interface IFaqCategoryListItemPublicResult
  extends IBaseFaqCategoryEntity {
  hasSubFaqCategory: boolean;
}

export interface IFaqCategoryListPublicResult
  extends IPaginated<IFaqCategoryListItemPublicResult> {}
