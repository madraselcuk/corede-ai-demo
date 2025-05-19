import {
  IAuthToken,
  IFileMetadata,
  ILoginDevMetaData,
  ITwoFactorAuthToken,
  Language,
  UserConfirmationStatus,
} from "@common_package";
import { UserType } from "../../../../user";

export interface ILoginResultUser {
  _id: string;
  status: UserConfirmationStatus;
  email: string;
  type: UserType;
  name?: string;
  surname?: string;
  profileImage?: IFileMetadata;
  language?: Language;
  country?: string;
  organization?: {
    _id: string;
    name: string;
  };
  department?: {
    _id: string;
    name: string;
  };
}

export interface ILoginResult extends Partial<IAuthToken>, ITwoFactorAuthToken {
  user?: ILoginResultUser;
  readonly devMetaData?: ILoginDevMetaData;
}
