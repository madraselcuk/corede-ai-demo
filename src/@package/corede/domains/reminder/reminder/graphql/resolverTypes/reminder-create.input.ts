import { ReminderPriority, ReminderTargetType } from '../../enums';

export interface IReminderCreateInput {
  title: string;
  content: string;
  description?: string;
  tags?: string[];
  priority: ReminderPriority;
  remindDate?: Date;
  targetType?: ReminderTargetType;
  targetId?: string;
  remindUserIds?: string[];
  organizationId?: string;
}
