import { IEntity } from "../../../../../interfaces/entity.interface";

export interface IUserProfile extends IEntity {
  user: IEntity;
  displayName?: string;
  displayImageUrl?: string;
}
