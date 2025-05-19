import { IUserProfile } from "@common_package";
import { IAppointment } from "../../interfaces/appointment.interface";

export interface IAppointmentListItemResult extends IAppointment {
  organizer: IUserProfile;
  attendees: IUserProfile[];
}
