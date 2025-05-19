import { gql } from "graphql-tag";

import {
  IBaseGraphqlRequest,
  IBaseGraphqlResponse,
  TGraphqlErrors,
} from "@common_package";

import { ITicketListResult } from "../resolverTypes/ticket-list.result";

import { ticketListItemResultFragment } from "./ticket-list-item.result.fragment";
import { ITicketListInput } from "../resolverTypes";

export const ticketListByRelatedQuery = gql`
  ${ticketListItemResultFragment}

  query ticketListByRelated($input: TicketListInput) {
    ticketListByRelated(input: $input) {
      data {
        ...TicketListItemResultFragment
      }
      count
    }
  }
`;

export interface ITicketListByRelatedRequest
  extends IBaseGraphqlRequest<ITicketListInput, undefined> {}

export interface ITicketListByRelatedResponse
  extends IBaseGraphqlResponse<ITicketListInput> {
  data: {
    ticketListByRelated: ITicketListResult;
  };
  errors: TGraphqlErrors<ITicketListInput>;
}
