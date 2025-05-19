import { IEntity } from "@common_package";
import { AppointmentStatus } from "../../enums";

export interface IAppointmentUpdateStatusFilterInput extends IEntity {}

export interface IAppointmentUpdateStatusInput {
  status?: AppointmentStatus;
}
