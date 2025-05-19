import { IEntity } from '@common_package';

export interface IReplyUpdateFilterInput extends IEntity {
  replyId: string;
}

export interface IReplyUpdateInput {
  content?: string;
  tags?: string[];
}
