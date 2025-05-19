import { gql } from "graphql-tag";

import {
  IBaseGraphqlRequest,
  IBaseGraphqlResponse,
  TGraphqlErrors,
} from "@common_package";

import { projectStatisticsResultFragment } from "./project-statistics.result.fragment";
import {
  IProjectStatisticsInput,
  IProjectStatisticsResult,
} from "../resolverTypes";

export const projectStatisticsQuery = gql`
  ${projectStatisticsResultFragment}

  query projectStatistics($input: ProjectStatisticsInput!) {
    projectStatistics(input: $input) {
      ...ProjectStatisticsResultFragment
    }
  }
`;

export interface IProjectStatisticsRequest
  extends IBaseGraphqlRequest<IProjectStatisticsInput, undefined> {}

export interface IProjectStatisticsResponse
  extends IBaseGraphqlResponse<IProjectStatisticsInput> {
  data: {
    projectStatistics: IProjectStatisticsResult;
  };
  errors: TGraphqlErrors<IProjectStatisticsInput>;
}
