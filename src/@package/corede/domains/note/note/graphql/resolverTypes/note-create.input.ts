import {
  IHasOptionalDepartmentId,
  IHasOptionalOrganizationId,
} from "../../../../user";
import { NoteTargetType } from "../../enums";

export interface INoteCreateInput
  extends IHasOptionalOrganizationId,
    IHasOptionalDepartmentId {
  title: string;
  content: string;
  targetType?: NoteTargetType;
  targetId?: string;
}
