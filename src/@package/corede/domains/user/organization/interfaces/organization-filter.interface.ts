import { IFilter } from "@common_package";
import { OrganizationStatus } from "../enums/organization-status.enum";

export interface IFilterOrganization extends IFilter {
  name?: string;
  statuses?: OrganizationStatus[];
  adminId?: string;
  createdById?: string;
}
