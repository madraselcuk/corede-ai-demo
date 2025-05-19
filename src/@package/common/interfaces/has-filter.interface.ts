import { IFilter } from './filter.interface';

export interface IHasFilter<T extends IFilter> {
  filter?: T;
}
