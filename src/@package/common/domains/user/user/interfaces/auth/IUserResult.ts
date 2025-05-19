import {
  IEntity,
  IHasOptionalUserAudit,
  IHasTimeStamp,
} from "../../../../../interfaces";
import { UserConfirmationStatus } from "../../enums/UserConfirmationStatus";

// TODO: Should this be used in auth instead of ILoginResponseUser
export interface IUserResult
  extends IEntity,
    IHasOptionalUserAudit,
    IHasTimeStamp {
  email: string;
  userId: string;
  role: string; // TODO: Role enum
  status?: UserConfirmationStatus;

  // name fields
  username?: string;
  name?: string;
  surname?: string;

  lastLoginDate?: Date;
  referrerCode?: string;
}
