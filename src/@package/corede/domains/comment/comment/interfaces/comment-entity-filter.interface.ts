import { IFilterComment } from "./comment-filter.interface";

export interface IFilterEntityComment
  extends Omit<IFilterComment, "targetType" | "targetId"> {}

export interface IFilterEntityCommentOwn
  extends Omit<IFilterComment, "targetType" | "createdById"> {}
