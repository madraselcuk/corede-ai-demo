import { gql } from "graphql-tag";

import {
  IBaseGraphqlRequest,
  IBaseGraphqlResponse,
  ICount,
  TGraphqlErrors,
} from "@common_package";

export const ticketListCountQuery = gql`
  query ticketListCount {
    ticketListCount {
      count
    }
  }
`;

export interface ITicketListCountRequest
  extends IBaseGraphqlRequest<undefined, undefined> {}

export interface ITicketListCountResponse
  extends IBaseGraphqlResponse<undefined> {
  data: {
    ticketListCount: ICount;
  };
  errors: TGraphqlErrors<undefined>;
}
