import { IEntity } from '@common_package';

export interface IUpdatePolicyFilterInput extends IEntity {}

export interface IUpdatePolicyInput {
  title?: string;
  content?: string;
}
