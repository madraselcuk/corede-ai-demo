import { IEntity } from "@common_package";

export interface IHasOptionalUpdatedById<T = string> {
  updatedById?: T;
}
export interface IHasUpdatedById<T = string> {
  updatedById: T;
}

export interface IHasOptionalUpdatedBy<T = IEntity> {
  updatedBy?: T;
}
export interface IHasUpdatedBy<T = IEntity> {
  updatedBy: T;
}
