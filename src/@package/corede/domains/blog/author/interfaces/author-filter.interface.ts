import { IFilter } from '@common_package';

export interface IFilterAuthor extends IFilter {
  name?: string; // filter with contains
}
