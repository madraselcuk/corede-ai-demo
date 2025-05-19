import { IPaginated } from '@common_package';
import { IBaseBlogCategoryEntity } from '../../interfaces';

export interface IBlogCategoriesItemResult extends IBaseBlogCategoryEntity {
  hasSubBlogCategory: boolean;
}

export interface IBlogCategoriesResult
  extends IPaginated<IBlogCategoriesItemResult> {}
