import { IFilter } from './filter.interface';

export interface IDateFilter extends IFilter {
  from?: Date;
  to?: Date;
}
