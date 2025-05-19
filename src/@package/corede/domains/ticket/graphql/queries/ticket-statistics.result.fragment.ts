import { gql } from "graphql-tag";

export const ticketStatisticsResultFragment = gql`
  fragment TicketStatisticsResultFragment on TicketStatisticsResult {
    ticketStatistics {
      countByTicketStatus {
        countByAnswered
        countByClosed
        countByInProgress
        countByOnHold
        countByOpen
      }
      ticketClosingDuration {
        avgDuration
        maxDuration
        minDuration
      }
    }
  }
`;
