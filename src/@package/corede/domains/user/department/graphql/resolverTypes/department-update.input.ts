import { IEntity } from '@common_package';

export interface IDepartmentUpdateFilterInput extends IEntity {}

export interface IDepartmentUpdateInput {
  name?: string;
  roleIds?: string[];
}
