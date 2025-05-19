import { IEntity } from "@common_package";

export interface ICommentUpdateFilterInput extends IEntity {}

export interface ICommentUpdateInput {
  content?: string;
  tags?: string[];
}
