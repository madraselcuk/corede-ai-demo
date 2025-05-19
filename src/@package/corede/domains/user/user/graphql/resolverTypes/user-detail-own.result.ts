import { IBaseDepartmentEntity } from "../../../department";
import { IBaseOrganizationEntity } from "../../../organization";
import { IUser } from "../../interfaces/user.interface";

export interface IUserDetailOwnResult extends IUser {
  organization?: IBaseOrganizationEntity;
  department?: IBaseDepartmentEntity;
}
