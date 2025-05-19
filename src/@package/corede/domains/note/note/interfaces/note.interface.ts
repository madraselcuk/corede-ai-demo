import {
  IEntity,
  IHasTimeStamp,
  IHasOptionalUserAudit,
  IUserProfile,
} from "@common_package";
import {
  IHasOptionalDepartment,
  IHasOptionalOrganization,
} from "../../../user";
import { NoteTargetType } from "../enums";

export interface IBaseNote {
  title: string;
  content: string;
  targetType?: NoteTargetType;
  target?: IEntity;
}

export interface IBaseNoteEntity extends IEntity, IBaseNote {}

export interface INote
  extends IBaseNoteEntity,
    IHasOptionalOrganization,
    IHasOptionalDepartment,
    IHasTimeStamp,
    IHasOptionalUserAudit<IUserProfile> {}
