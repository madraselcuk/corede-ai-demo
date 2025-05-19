import { gql } from "graphql-tag";

import {
  IBaseGraphqlRequest,
  IBaseGraphqlResponse,
  TGraphqlErrors,
} from "@common_package";

import { ITicketStatisticsResult } from "../resolverTypes/ticket-statistics.result";

import { ticketStatisticsResultFragment } from "./ticket-statistics.result.fragment";

export const ticketStatisticsQuery = gql`
  ${ticketStatisticsResultFragment}

  query ticketStatistics {
    ticketStatistics(input: $input) {
      ...TicketStatisticsResultFragment
    }
  }
`;

export interface ITicketStatisticsRequest
  extends IBaseGraphqlRequest<undefined, undefined> {}

export interface ITicketStatisticsResponse
  extends IBaseGraphqlResponse<undefined> {
  data: {
    ticketStatistics: ITicketStatisticsResult;
  };
  errors: TGraphqlErrors<undefined>;
}
