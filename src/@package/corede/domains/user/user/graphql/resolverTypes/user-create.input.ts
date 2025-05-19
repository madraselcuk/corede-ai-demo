import { Gender, IFileMetadata, Language } from "@common_package";
import { IHasOptionalDepartmentId } from "../../../department";
import {
  IHasOptionalOrganization,
  IHasOptionalOrganizationId,
  IOrganizationCreateInput,
} from "../../../organization";
import { UserType } from "../../enums/user-type.enum";

/**
 * @field organizationId can be used if scope is all: assigning user an organization
 * @field organization can be used if scope is all or org: alongside of creating a user an organization is created as well
 * @field departmentId can be used if scope is all or org: assigning user a department **(organizationId can be used but department must belong to that organization)** **(if no organization then department should not have any organization meaning belonging to cocrm)**
 */
export interface IUserCreateInput
  extends IHasOptionalOrganization<IUserCreateOrganizationInput>,
    IHasOptionalOrganizationId,
    IHasOptionalDepartmentId {
  type?: UserType; // will be assigned as user by default
  email: string;

  phoneNumber?: string;

  // personal information
  name: string;
  surname: string;
  birthDate?: Date;
  gender?: Gender;
  address?: string;
  profileImage?: IFileMetadata;
  backgroundImage?: IFileMetadata;
  description?: string;
  country?: string;
  city?: string;

  // settings
  language?: Language;

  acceptedPolicyIds?: string[]; // will be assigned as empty array by default
  roleIds?: string[];
  permissionIds?: string[];
  prohibitedPermissionIds?: string[];
}

export interface IUserCreateOrganizationInput
  extends Omit<IOrganizationCreateInput, "adminId"> {}
