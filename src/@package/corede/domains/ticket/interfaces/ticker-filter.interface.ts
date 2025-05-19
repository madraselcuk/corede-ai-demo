import { IFilter } from "@common_package";
import {
  TicketCategory,
  TicketPriority,
  TicketStatus,
  TicketTargetType,
} from "../enums";
import { IHasOptionalDepartmentId } from "../..";
import { IHasOptionalCreatedById } from "../../../common";
import { IHasOptionalOrganizationId } from "../../user";

export interface IFilterTicket
  extends IFilter,
    IHasOptionalOrganizationId,
    IHasOptionalDepartmentId,
    IHasOptionalCreatedById {
  subject?: string;
  contactName?: string;
  contactEmail?: string;
  assigneeIds?: string[];
  priorities?: TicketPriority[];
  statuses?: TicketStatus[];
  targetType?: TicketTargetType;
  categories?: TicketCategory[];
  tags?: string[];
}
