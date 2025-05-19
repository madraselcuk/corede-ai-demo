import { IDateFilter, IFilter } from "@common_package";
import {
  IHasOptionalDepartmentId,
  IHasOptionalOrganizationId,
} from "../../../user";
import { NoteTargetType } from "../enums";
import { IHasOptionalCreatedById } from "../../../../common";

export interface IFilterNote
  extends IFilter,
    IHasOptionalOrganizationId,
    IHasOptionalDepartmentId,
    IHasOptionalCreatedById {
  title?: string;
  content?: string;
  targetType?: NoteTargetType;
  targetIds?: string[];
  updatedAtDateFilter?: IDateFilter;
}
