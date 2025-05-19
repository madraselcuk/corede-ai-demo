import {
  IEntity,
  IHasTimeStamp,
  IHasOptionalUserAudit,
  IUser,
} from "@common_package";
import {
  TicketCategory,
  TicketPriority,
  TicketStatus,
  TicketTargetType,
} from "../enums";
import { IStatusUpdateHistory } from "../../form";
import { IHasDocuments } from "../../../common";
import { IHasOptionalDepartment, IHasOptionalOrganization } from "../../user";

export interface IBaseTicket {
  subject: string;
  contactName: string;
  contactEmail: string;
  assignees: IUser[];
  priority: TicketPriority;
  status: TicketStatus;
  statusHistory: IStatusUpdateHistory[];
  closedDate?: Date;
  targetType?: TicketTargetType;
  target?: IEntity;
  category: TicketCategory;
  ticketBody?: string;
  tags: string[];
}

export interface IBaseTicketEntity extends IEntity, IBaseTicket {}

export interface ITicket
  extends IBaseTicketEntity,
    IHasDocuments,
    IHasOptionalOrganization,
    IHasOptionalDepartment,
    IHasTimeStamp,
    IHasOptionalUserAudit {}
