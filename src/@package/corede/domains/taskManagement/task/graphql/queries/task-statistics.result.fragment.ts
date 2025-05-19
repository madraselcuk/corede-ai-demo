import { gql } from "graphql-tag";

export const taskStatisticsResultFragment = gql`
  fragment TaskStatisticsResultFragment on TaskStatisticsResult {
    dailyHistory {
      dailyCreatedCounts
      dailyTotalCounts
    }
    countByTaskStatus {
      countByNotStarted
      countByInProgress
      countByTested
      countByAwaitingFeedback
      countByCompleted
    }
    countByTaskPriority {
      countByLow
      countByMedium
      countByHigh
      countByUrgent
    }
  }
`;
