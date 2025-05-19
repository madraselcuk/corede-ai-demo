import { IHasFilter } from "@common_package";
import {
  IHasOptionalDepartmentId,
  IHasOptionalOrganizationId,
} from "../../../../user";

export interface IFilterFileFolder
  extends IHasOptionalOrganizationId,
    IHasOptionalDepartmentId {
  createdById?: string;
}

export interface IFileFolderListInput extends IHasFilter<IFilterFileFolder> {}
