import { IDateFilter, IFilter, INumberIntervalFilter } from "@common_package";
import {
  AppointmentCategory,
  AppointmentStatus,
  AppointmentTargetType,
} from "../enums";
import { IHasOptionalDepartmentId } from "../../..";
import { IHasOptionalOrganizationId } from "../../../user";
import { IHasOptionalCreatedById } from "../../../../common";

export interface IFilterAppointment
  extends IFilter,
    IHasOptionalOrganizationId,
    IHasOptionalDepartmentId,
    IHasOptionalCreatedById {
  title?: string;
  description?: string;
  startTime?: IDateFilter;
  endTime?: IDateFilter;
  duration?: INumberIntervalFilter;
  timezone?: string;
  location?: string;
  organizerIds?: string[];
  targetIds?: string[];
  targetTypes?: AppointmentTargetType[];
  attendeeIds?: string[];
  categories?: AppointmentCategory[];
  statuses?: AppointmentStatus[];
  updatedAtDateFilter?: IDateFilter;
}
