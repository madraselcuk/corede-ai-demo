import { IEntity, IHasTimeStamp, IHasOptionalUserAudit } from '@common_package';

export interface IBaseTag {
  leadTags: string[];
  organization?: IEntity;
}

export interface IBaseTagEntity extends IEntity, IBaseTag {}

export interface ITag
  extends IBaseTagEntity,
    IHasTimeStamp,
    IHasOptionalUserAudit {}
