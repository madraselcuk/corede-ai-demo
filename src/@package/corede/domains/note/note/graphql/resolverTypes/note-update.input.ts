import { IEntity } from "@common_package";
import { NoteTargetType } from "../../enums";

export interface INoteUpdateFilterInput extends IEntity {}

export interface INoteUpdateInput {
  title?: string;
  content?: string;
  targetType?: NoteTargetType;
  targetId?: string;
}
