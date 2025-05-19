import { IDateFilter } from "@common_package";

export interface IHasOptionalCreatedAtFilter {
  createdAtDateFilter?: IDateFilter;
}
export interface IHasOptionalUpdatedAtFilter {
  updatedAtDateFilter?: IDateFilter;
}

export interface IHasOptionalTimeStampFilter
  extends IHasOptionalCreatedAtFilter,
    IHasOptionalUpdatedAtFilter {}
