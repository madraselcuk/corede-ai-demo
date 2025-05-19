import { IEntity } from "@common_package";
import {
  ReminderPriority,
} from "../../enums";

export interface IReminderUpdateFilterInput extends IEntity {}

export interface IReminderUpdateInput {
  title?: string;
  content?: string;
  description?: string;
  tags?: string[];
  priority?: ReminderPriority;
  remindDate?: Date;
  remindUserIds?: string[];
}
