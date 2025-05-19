import { IFilter } from "./filter.interface";

export interface INumberIntervalFilter extends IFilter {
  from?: number;
  to?: number;
}
