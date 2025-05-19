import { IFilter } from '@common_package';
import { IHasFullTextSearchFilter } from '@common_package';

export interface IFilterCity extends IFilter, IHasFullTextSearchFilter {
  name?: string;
  state_name?: string;
  country_name?: string;
}
