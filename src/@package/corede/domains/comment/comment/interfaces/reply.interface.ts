import { IEntity, IHasOptionalUserAudit, IHasTimeStamp } from '@common_package';

export interface IBaseReply {
  content: string;
  tags?: string[];
}

export interface IBaseReplyEntity extends IEntity, IBaseReply {}

export interface IReply
  extends IBaseReplyEntity,
    IHasTimeStamp,
    IHasOptionalUserAudit {}
