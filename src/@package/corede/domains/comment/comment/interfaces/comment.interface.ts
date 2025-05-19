import {
  IEntity,
  IHasOptionalUserAudit,
  IHasTimeStamp,
} from "@common_package";
import { IReply } from "./reply.interface";
import { CommentTargetType } from "../enums";
import {
  IHasOptionalOrganization,
  IHasOptionalDepartment,
} from "../../../user";

export interface IBaseComment {
  content: string;
  target: IEntity;
  targetType: CommentTargetType;
  tags?: string[];
  replies: IReply[];
}

export interface IBaseCommentEntity extends IEntity, IBaseComment {}

export interface IComment
  extends IBaseCommentEntity,
    IHasOptionalOrganization,
    IHasOptionalDepartment,
    IHasTimeStamp,
    IHasOptionalUserAudit {}
