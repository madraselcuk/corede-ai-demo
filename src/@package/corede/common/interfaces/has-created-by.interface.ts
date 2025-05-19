import { IEntity } from "@common_package";

export interface IHasOptionalCreatedById<T = string> {
  createdById?: T;
}
export interface IHasCreatedById<T = string> {
  createdById: T;
}

export interface IHasOptionalCreatedBy<T = IEntity> {
  createdBy?: T;
}
export interface IHasCreatedBy<T = IEntity> {
  createdBy: T;
}
