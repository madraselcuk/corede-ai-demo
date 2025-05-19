import { IHasOptionalDepartmentId } from "../../../..";
import { IHasDocuments } from "../../../../../common";
import { IHasOptionalOrganizationId } from "../../../../user";
import { AppointmentCategory, AppointmentTargetType } from "../../enums";
export interface IAppointmentCreateInput
  extends Partial<IHasDocuments>,
    IHasOptionalOrganizationId,
    IHasOptionalDepartmentId {
  title: string;
  description: string;
  startTime: Date;
  endTime: Date;
  timezone?: string;
  location?: string;
  meetingLink?: string;
  organizerId?: string;
  targetType?: AppointmentTargetType;
  attendeeIds?: string[];
  category: AppointmentCategory;
}
