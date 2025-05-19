import {
  IBaseGraphqlRequest,
  IBaseGraphqlResponse,
  TGraphqlErrors,
} from '@common_package';
import gql from 'graphql-tag';
import {
  ITicketUpdateInput,
  ITicketUpdateFilterInput,
} from '../resolverTypes/ticket-update.input';
import { ITicketUpdateResult } from '../resolverTypes/ticket-update.result';

export const ticketUpdateQuery = gql`
  mutation ticketUpdate(
    $filter: TicketUpdateFilterInput!
    $input: TicketUpdateInput!
  ) {
    ticketUpdate(filter: $filter, input: $input) {
      _id
    }
  }
`;

export interface ITicketUpdateRequest
  extends IBaseGraphqlRequest<ITicketUpdateInput, ITicketUpdateFilterInput> {}

export interface ITicketUpdateResponse
  extends IBaseGraphqlResponse<ITicketUpdateInput> {
  data: {
    ticketUpdate: ITicketUpdateResult;
  };
  errors: TGraphqlErrors<ITicketUpdateInput>;
}
