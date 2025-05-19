import { Language } from '@common_package';
import { WebinarStatus } from '../../enums/webinar-status.enum';
import { WebinarType } from '../../enums/webinar-type.enum';

export interface ICreateWebinarInput {
  status?: WebinarStatus;
  title: string;
  description: string;
  content: string;
  language: Language;
  type: WebinarType;
  quota: number;
  lastApplicationDate: Date;
  startDate: Date;
  duration: number;
  participationLink: string;
}
