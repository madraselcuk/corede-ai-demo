import { IFilter } from '@common_package';

export interface IFilterHelpCenterCategory extends IFilter {
  name?: string; // check for contains
  parentCategoryId?: string
}