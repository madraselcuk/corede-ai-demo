import { IEntity } from "@common_package";

export interface IUserRoleUpdateFilterInput extends IEntity {}

export interface IUserRoleUpdateInput {
  roleIds: string[];
}
