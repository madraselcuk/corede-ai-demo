import { IEntity, IHasTimeStamp, IHasOptionalUserAudit } from '@common_package';

export interface IBaseWebinarParticipant {
  email: string;
  name?: string;
  surname?: string;
  country?: string;
  city?: string;
  company?: string;
  joined?: boolean;
}

export interface IBaseWebinarParticipantEntity
  extends IEntity,
    IBaseWebinarParticipant {}

export interface IWebinarParticipant
  extends IBaseWebinarParticipantEntity,
    IHasTimeStamp,
    IHasOptionalUserAudit {}