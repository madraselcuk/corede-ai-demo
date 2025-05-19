import { IDateFilter, IFilter } from "@common_package";
import { CommentTargetType } from "../enums";
import { IHasOptionalDepartmentId } from "../../..";
import { IHasOptionalCreatedById } from "../../../../common";
import { IHasOptionalOrganizationId } from "../../../user";

export interface IFilterComment
  extends IFilter,
    IHasOptionalOrganizationId,
    IHasOptionalDepartmentId,
    IHasOptionalCreatedById {
  targetId?: string;
  targetType?: CommentTargetType;
  tags?: string[];
  updatedAtDateFilter?: IDateFilter;
}
