import { UserConfirmationStatus } from "../../enums/UserConfirmationStatus";

export interface IFilterUser {
  email?: string;
  status?: UserConfirmationStatus;
  role?: string; // TODO: Role enum
  createdById?: string;
}
