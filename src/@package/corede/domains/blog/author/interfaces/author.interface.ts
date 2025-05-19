import { IEntity, IHasTimeStamp, IHasOptionalUserAudit } from '@common_package';

export interface IBaseAuthor {
  name: string; // unique
  bio?: string;
}

export interface IBaseAuthorEntity extends IEntity, IBaseAuthor {}

export interface IAuthor
  extends IBaseAuthorEntity,
    IHasTimeStamp,
    IHasOptionalUserAudit {
  linkedIn?: string;
  instagram?: string;
  x?: string;
  facebook?: string;
}
