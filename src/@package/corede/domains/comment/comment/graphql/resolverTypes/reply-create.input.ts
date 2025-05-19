import { IEntity } from '@common_package';

export interface IReplyCreateFilterInput extends IEntity {}

export interface IReplyCreateInput {
  content: string;
  tags?: string[];
}
