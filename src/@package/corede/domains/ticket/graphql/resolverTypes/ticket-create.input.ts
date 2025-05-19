import { IFileMetadata } from "@common_package";
import { TicketCategory, TicketPriority, TicketTargetType } from "../../enums";

export interface ITicketCreateInput {
  subject: string;
  contactName: string;
  contactEmail: string;
  assigneeIds?: string[];
  priority?: TicketPriority;
  targetType?: TicketTargetType;
  targetId?: string;
  category?: TicketCategory;
  ticketBody?: string;
  tags?: string[];
  documents?: IFileMetadata[];

  organizationId?: string;
  departmentId?: string;
}
