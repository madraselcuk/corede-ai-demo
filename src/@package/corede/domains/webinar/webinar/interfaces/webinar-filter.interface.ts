import { Language, IDateFilter, IFilter } from "@common_package";
import { WebinarStatus } from "../enums";

export interface IFilterWebinar extends IFilter {
  title?: string; // check with regex contains
  statuses?: WebinarStatus[];
  languages?: Language[];
  lastParticipationDateFilter?: IDateFilter;
  startDateFilter?: IDateFilter;
  updatedAtDateFilter?: IDateFilter;
}
