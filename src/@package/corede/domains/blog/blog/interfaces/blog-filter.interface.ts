import { Language, IDateFilter, IFilter } from '@common_package';

export interface IFilterBlog extends IFilter {
  title?: string; // check with regex contains
  authorIds?: string[];
  categoryIds?: string[];
  targetCategoryIds?: string[];
  languages?: Language[];
  showcase?: boolean;
  editorsChoice?: boolean;
  popular?: boolean;
  updatedAtDateFilter?: IDateFilter;
}
