import { IDateFilter, IFilter, Language } from '@common_package';

export interface IFilterFaq extends IFilter {
  question?: string; // check with regex contains
  answer?: string; // check with regex contains
  categoryIds?: string[];
  languages?: Language[];
  popular?: boolean;
  createdAtDateFilter?: IDateFilter;
  updatedAtDateFilter?: IDateFilter;
}
