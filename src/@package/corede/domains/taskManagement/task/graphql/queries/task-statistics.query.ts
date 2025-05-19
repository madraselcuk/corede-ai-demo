import { gql } from "graphql-tag";

import {
  IBaseGraphqlRequest,
  IBaseGraphqlResponse,
  TGraphqlErrors,
} from "@common_package";

import { taskStatisticsResultFragment } from "./task-statistics.result.fragment";
import { ITaskStatisticsInput, ITaskStatisticsResult } from "../resolverTypes";

export const taskStatisticsQuery = gql`
  ${taskStatisticsResultFragment}

  query taskStatistics($input: TaskStatisticsInput!) {
    taskStatistics(input: $input) {
      ...TaskStatisticsResultFragment
    }
  }
`;

export interface ITaskStatisticsRequest
  extends IBaseGraphqlRequest<ITaskStatisticsInput, undefined> {}

export interface ITaskStatisticsResponse
  extends IBaseGraphqlResponse<ITaskStatisticsInput> {
  data: {
    taskStatistics: ITaskStatisticsResult;
  };
  errors: TGraphqlErrors<ITaskStatisticsInput>;
}
