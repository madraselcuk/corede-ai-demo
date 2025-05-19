export interface ITaskStatisticsResult {
  dailyHistory?: ITaskDailyHistory;
  countByTaskStatus?: ITaskCountByTaskStatus;
  countByTaskPriority?: ITaskCountByTaskPriority;
}

export interface ITaskDailyHistory {
  dailyCreatedCounts: number[];
  dailyTotalCounts: number[];
}

// TODO now, task status is other entity, status statistics must be implemented like dailyCount (using array)
export interface ITaskCountByTaskStatus {
  // countByNotStarted?: number;
  // countByInProgress?: number;
  // countByTested?: number;
  // countByAwaitingFeedback?: number;
  // countByCompleted?: number;
}

export interface ITaskCountByTaskPriority {
  countByLow?: number;
  countByMedium?: number;
  countByHigh?: number;
  countByUrgent?: number;
}
