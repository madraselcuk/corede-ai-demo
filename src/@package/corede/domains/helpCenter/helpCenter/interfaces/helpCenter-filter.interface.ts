import { IDateFilter, IFilter, Language } from "@common_package";

export interface IFilterHelpCenter extends IFilter {
  question?: string; // check with regex contains
  answer?: string; // check with regex contains
  categoryIds?: string[];
  languages?: Language[];
  createdAtDateFilter?: IDateFilter;
  updatedAtDateFilter?: IDateFilter;
}
