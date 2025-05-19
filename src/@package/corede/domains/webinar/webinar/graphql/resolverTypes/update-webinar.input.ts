import { IEntity, Language } from '@common_package';
import { WebinarType } from '../../enums/webinar-type.enum';
import { WebinarStatus } from '../../enums/webinar-status.enum';

export interface IUpdateWebinarFilterInput extends IEntity {}

export interface IUpdateWebinarInput {
  status?: WebinarStatus;
  title?: string;
  description?: string;
  content?: string;
  language?: Language;
  type?: WebinarType;
  quota?: number;
  lastApplicationDate?: Date;
  startDate?: Date;
  duration?: number;
  participationLink?: string;
}
