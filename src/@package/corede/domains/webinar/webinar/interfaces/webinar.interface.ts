import {
  IEntity,
  IHasTimeStamp,
  IHasOptionalUserAudit,
  Language,
} from '@common_package';
import { WebinarStatus, WebinarType } from '../enums';
import { IWebinarParticipant } from './webinar.participant.interface';

export interface IBaseWebinar {
  title: string;
  description: string;
  content: string;
  language: Language;
  type: WebinarType;
  quota: number;
  /**
   * the last date that any application/join to webinar may happen. After this day applications/joins will be closed
   */
  lastApplicationDate: Date;
  startDate: Date;
  /**
   * in minutes
   */
  duration: number;
  /**
   * the meeting link for online webinar. This link will be sent to participant via email
   */
  participationLink: string;
  status: WebinarStatus;
  participants: IWebinarParticipant[];
}

export interface IBaseWebinarEntity extends IEntity, IBaseWebinar {}

export interface IWebinar
  extends IBaseWebinarEntity,
    IHasTimeStamp,
    IHasOptionalUserAudit {}
