import {
  IEntity,
  IHasTimeStamp,
  IHasOptionalUserAudit,
  IUserProfile,
} from "@common_package";
import { ReminderStatus, ReminderPriority, ReminderTargetType } from "../enums";
import {
  IHasOptionalDepartment,
  IHasOptionalOrganization,
} from "../../../user";

export interface IBaseReminder {
  status: ReminderStatus;
  title: string;
  content: string;
  description?: string;
  tags: string[];
  remindDate?: Date;
  priority: ReminderPriority;
  targetType?: ReminderTargetType;
  target?: IEntity;
  remindUsers?: IEntity[];
}

export interface IBaseReminderEntity extends IEntity, IBaseReminder {}

export interface IReminder
  extends IBaseReminderEntity,
    IHasOptionalOrganization,
    IHasOptionalDepartment,
    IHasTimeStamp,
    IHasOptionalUserAudit<IUserProfile> {
  remindUsers?: IUserProfile[];
}
