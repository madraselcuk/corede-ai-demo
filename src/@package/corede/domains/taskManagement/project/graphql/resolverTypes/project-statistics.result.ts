export interface IProjectStatisticsResult {
  dailyHistory?: IProjectDailyHistory;
  countByProjectStatus?: IProjectCountByProjectStatus;
  countByProjectPriority?: IProjectCountByProjectPriority;
}

export interface IProjectDailyHistory {
  dailyCreatedCounts: number[];
  dailyTotalCounts: number[];
}

// TODO now, project status is other entity, status statistics must be implemented like dailyCount (using array)
export interface IProjectCountByProjectStatus {
  // countByNotStarted?: number;
  // countByInProgress?: number;
  // countByTested?: number;
  // countByAwaitingFeedback?: number;
  // countByCompleted?: number;
}

export interface IProjectCountByProjectPriority {
  countByLow?: number;
  countByMedium?: number;
  countByHigh?: number;
  countByUrgent?: number;
}
