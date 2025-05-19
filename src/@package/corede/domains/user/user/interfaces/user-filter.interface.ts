import { IFilter, UserConfirmationStatus } from "@common_package";
import { IHasOptionalOrganizationId } from "../../organization";

export interface IFilterUser extends IHasOptionalOrganizationId, IFilter {
  name?: string;
  surname?: string;
  email?: string;
  status?: UserConfirmationStatus;
  role?: string;
  createdById?: string;
}
