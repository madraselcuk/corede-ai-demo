import { CommentTargetType } from "../../enums";

export interface ICommentCreateInput {
  content: string;
  targetId: string;
  targetType: CommentTargetType;
  tags?: string[];

  organizationId?: string;
  departmentId?: string;
}
