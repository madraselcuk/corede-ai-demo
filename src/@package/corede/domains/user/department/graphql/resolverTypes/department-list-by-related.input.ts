import { IHasFilter, IHasPagination, IPagination } from "@common_package";
import { IFilterDepartment } from "../../interfaces";
import { DepartmentRelatedTargetType } from "../../enums";

export interface IFilterDepartmentListByRelated extends IFilterDepartment {
  relatedTargetType?: DepartmentRelatedTargetType;
}

export interface IDepartmentListByRelatedInput
  extends IHasPagination<IPagination>,
    IHasFilter<IFilterDepartmentListByRelated> {}
