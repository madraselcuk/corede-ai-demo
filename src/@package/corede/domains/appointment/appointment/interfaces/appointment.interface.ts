import { IEntity, IHasTimeStamp, IHasOptionalUserAudit } from "@common_package";

import {
  AppointmentCategory,
  AppointmentStatus,
  AppointmentTargetType,
} from "../enums";
import { IHasOptionalDepartment } from "../../..";
import { IHasOptionalOrganization } from "../../../user";
import { IHasDocuments } from "../../../../common";

export interface IBaseAppointment {
  title: string;
  description: string;
  startTime: Date;
  endTime: Date;
  duration: number;
  timezone?: string;
  location?: string;
  meetingLink?: string;
  organizer?: IEntity;
  targetType?: AppointmentTargetType;
  attendees: IEntity[];
  category: AppointmentCategory;
  status: AppointmentStatus;
}

export interface IBaseAppointmentEntity extends IEntity, IBaseAppointment {}

export interface IAppointment
  extends IBaseAppointmentEntity,
    IHasOptionalOrganization,
    IHasOptionalDepartment,
    IHasTimeStamp,
    IHasOptionalUserAudit,
    IHasDocuments {}
