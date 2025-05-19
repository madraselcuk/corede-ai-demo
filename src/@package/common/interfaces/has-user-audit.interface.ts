import { IEntity, IInsertEntity } from "./entity.interface";

export interface IHasUserAudit<T extends IEntity = IEntity> {
  createdBy: T;
  updatedBy: T;
}

export interface IHasOptionalUserAudit<T extends IEntity = IEntity> {
  createdBy?: T;
  updatedBy?: T;
}

export interface IHasInsertUserAudit {
  createdBy: IInsertEntity;
  updatedBy: IInsertEntity;
}

export interface IHasOptionalInsertUserAudit {
  createdBy?: IInsertEntity;
  updatedBy?: IInsertEntity;
}
export interface IHasInsertCreatedUserAudit {
  createdBy: IInsertEntity;
}

export interface IHasOptionalInsertCreatedUserAudit {
  createdBy?: IInsertEntity;
}

export interface IHasInsertUpdatedUserAudit<T = IInsertEntity> {
  updatedBy: T;
}

export interface IHasOptionalInsertUpdatedUserAudit<T = IInsertEntity> {
  updatedBy?: T;
}
