import { IFilter } from '@common_package';

export interface IFilterFaqCategory extends IFilter {
  name?: string; // check for contains
  parentCategoryId?: string
}