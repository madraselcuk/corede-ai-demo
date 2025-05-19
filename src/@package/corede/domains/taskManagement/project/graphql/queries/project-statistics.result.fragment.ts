import { gql } from "graphql-tag";

export const projectStatisticsResultFragment = gql`
  fragment ProjectStatisticsResultFragment on ProjectStatisticsResult {
    dailyHistory {
      dailyCreatedCounts
      dailyTotalCounts
    }
    countByProjectStatus {
      countByNotStarted
      countByInProgress
      countByTested
      countByAwaitingFeedback
      countByCompleted
    }
    countByProjectPriority {
      countByLow
      countByMedium
      countByHigh
      countByUrgent
    }
  }
`;
