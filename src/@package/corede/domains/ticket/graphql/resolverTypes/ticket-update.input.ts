import { IEntity } from "@common_package";
import { TicketCategory, TicketPriority } from "../../enums";

export interface ITicketUpdateFilterInput extends IEntity {}

export interface ITicketUpdateInput {
  subject?: string;
  contactName?: string;
  contactEmail?: string;
  assigneeIds?: string[];
  priority?: TicketPriority;
  category?: TicketCategory;
  ticketBody?: string;
  tags?: string[];

  departmentId?: string;
}
