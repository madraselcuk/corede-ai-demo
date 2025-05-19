import { IEntity } from '@common_package';
import { AppointmentCategory } from '../../enums';

export interface IAppointmentUpdateFilterInput extends IEntity {}

export interface IAppointmentUpdateInput {
  title?: string;
  description?: string;
  startTime?: Date;
  endTime?: Date;
  timezone?: string;
  location?: string;
  meetingLink?: string;
  organizerId?: string;
  attendeeIds?: string[];
  category?: AppointmentCategory;
}
