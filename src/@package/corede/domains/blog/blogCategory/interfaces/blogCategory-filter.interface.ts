import { IFilter } from '@common_package';

export interface IFilterBlogCategory extends IFilter {
  name?: string; // check for contains
  parentCategoryId?: string
}