export interface ITicketStatisticsResult {
  countByTicketStatus?: ITicketCountByTicketStatus;
  ticketClosingDuration?: ITicketClosingDuration;
}

export interface ITicketCountByTicketStatus {
  countByOpen?: number;
  countByInProgress?: number;
  countByAnswered?: number;
  countByOnHold?: number;
  countByClosed?: number;
}

export interface ITicketClosingDuration {
  maxDuration?: number;
  minDuration?: number;
  avgDuration?: number;
}
