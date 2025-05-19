import { IPaginated } from '@common_package';
import { IBaseBlogCategoryEntity } from '../../interfaces';

export interface IBlogCategoriesItemPublicResult
  extends IBaseBlogCategoryEntity {
  hasSubBlogCategory: boolean;
}

export interface IBlogCategoriesPublicResult
  extends IPaginated<IBlogCategoriesItemPublicResult> {}
