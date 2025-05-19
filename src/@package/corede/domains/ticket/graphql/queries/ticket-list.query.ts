import { gql } from 'graphql-tag';

import {
  IBaseGraphqlRequest,
  IBaseGraphqlResponse,
  TGraphqlErrors,
} from '@common_package';

import { ITicketListResult } from '../resolverTypes/ticket-list.result';

import { ticketListItemResultFragment } from './ticket-list-item.result.fragment';
import { ITicketListInput } from '../resolverTypes';

export const ticketListQuery = gql`
  ${ticketListItemResultFragment}

  query ticketList($input: TicketListInput) {
    ticketList(input: $input) {
      data {
        ...TicketListItemResultFragment
      }
      count
    }
  }
`;

export interface ITicketListRequest
  extends IBaseGraphqlRequest<ITicketListInput, undefined> {}

export interface ITicketListResponse
  extends IBaseGraphqlResponse<ITicketListInput> {
  data: {
    ticketList: ITicketListResult;
  };
  errors: TGraphqlErrors<ITicketListInput>;
}
