import { IFilter, IDateFilter } from "@common_package";
import { ReminderPriority, ReminderStatus, ReminderTargetType } from "../enums";
import { IHasOptionalCreatedById } from "../../../../common";
import {
  IHasOptionalDepartmentId,
  IHasOptionalOrganizationId,
} from "../../../user";

export interface IFilterReminder
  extends IFilter,
    IHasOptionalOrganizationId,
    IHasOptionalDepartmentId,
    IHasOptionalCreatedById {
  title?: string;
  content?: string;
  statuses?: ReminderStatus[];
  tags?: string[];
  priorities?: ReminderPriority[];
  targetTypes?: ReminderTargetType[];
  targetIds?: string[];
  remindUserIds?: string[];
  remindDateFilter?: IDateFilter;
}
