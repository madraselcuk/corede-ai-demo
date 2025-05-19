import { Gender, Language } from "../../../../../enums";
import {
  IEntity,
  IHasTimeStamp,
  IHasOptionalUserAudit,
} from "../../../../../interfaces";
import { IFileMetadata } from "../../../../dms";
import { UserConfirmationStatus } from "../../enums/UserConfirmationStatus";

export interface IBaseUser {
  role: string; // TODO: Role enum

  // personal information
  name?: string;
  surname?: string;
  profileImage?: IFileMetadata;

  // settings
  language?: Language;

  // contact
  email: string;
}

export interface IBaseUserEntity extends IEntity, IBaseUser {}

export interface IUser
  extends IBaseUserEntity,
    IHasTimeStamp,
    IHasOptionalUserAudit {
  // personal information
  birthDate?: Date;
  gender?: Gender;
  address?: string;
  backgroundImage?: IFileMetadata;
  description?: string;
  password?: string;
  status?: UserConfirmationStatus;
  country?: string;
  city?: string;

  // settings
  // acceptedPolicies: IUserAcceptedPolicy[]; // TODO:

  // contact
  email: string;
}
