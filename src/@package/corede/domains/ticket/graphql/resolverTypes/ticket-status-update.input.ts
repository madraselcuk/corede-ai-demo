import { TicketStatus } from '../../enums';

export interface ITicketStatusUpdateInput {
  status: TicketStatus;
}

export interface ITicketStatusUpdateFilterInput {
  ticketId: string;
}
