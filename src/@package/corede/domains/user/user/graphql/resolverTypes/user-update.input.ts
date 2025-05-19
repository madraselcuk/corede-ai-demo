import { Gender, IEntity } from "@common_package";
import { ITwoFactorAuth } from "../../interfaces";

export interface IUserUpdateFilterInput extends IEntity {}

export interface IUserUpdateInput {
  // contact
  // email?: string; // must be updated via confirmation
  phoneNumber?: string;

  // personal information
  name?: string;
  surname?: string;
  birthDate?: Date;
  gender?: Gender;
  address?: string;
  // profileImage?: IFileMetadata;
  // backgroundImage?: IFileMetadata;
  description?: string;
  // status?: UserConfirmationStatus;
  country?: string;
  state?: string;
  city?: string;

  // settings
  language?: string;
  twoFactorAuth?: ITwoFactorAuth;

  departmentId?: string;
}
