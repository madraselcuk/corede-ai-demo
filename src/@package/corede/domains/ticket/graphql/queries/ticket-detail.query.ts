import { gql } from 'graphql-tag';

import {
  IBaseGraphqlRequest,
  IBaseGraphqlResponse,
  TGraphqlErrors,
} from '@common_package';

import { ticketDetailResultFragment } from './ticket-detail.result.fragment';
import { ITicketDetailInput } from '../resolverTypes/ticket-detail.input';
import { ITicketDetailResult } from '../resolverTypes/ticket-detail.result';

export const ticketDetailQuery = gql`
  ${ticketDetailResultFragment}

  query ticketDetail($input: TicketDetailInput!) {
    ticketDetail(input: $input) {
      ...TicketDetailResultFragment
    }
  }
`;

export interface ITicketDetailRequest
  extends IBaseGraphqlRequest<ITicketDetailInput, undefined> {}

export interface ITicketDetailResponse
  extends IBaseGraphqlResponse<ITicketDetailInput> {
  data: {
    ticketDetail: ITicketDetailResult;
  };
  errors: TGraphqlErrors<ITicketDetailInput>;
}
