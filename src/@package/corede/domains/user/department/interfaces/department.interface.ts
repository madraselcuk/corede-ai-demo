import {
  IEntity,
  IHasTimeStamp,
  IHasOptionalUserAudit,
  IBaseUserEntity,
} from "@common_package";
import { IHasOptionalOrganization } from "../../organization";
import { IBaseRoleEntity } from "../../../auth";

export interface IBaseDepartment {
  name: string;
}

export interface IBaseDepartmentEntity extends IEntity, IBaseDepartment {}

export interface IDepartment
  extends IBaseDepartmentEntity,
    IHasOptionalOrganization,
    IHasTimeStamp,
    IHasOptionalUserAudit {
  users: Array<IBaseUserEntity>;
  roles: Array<IBaseRoleEntity>;
}
