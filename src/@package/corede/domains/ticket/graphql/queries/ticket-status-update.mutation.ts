import {
  IBaseGraphqlRequest,
  IBaseGraphqlResponse,
  TGraphqlErrors,
} from '@common_package';
import gql from 'graphql-tag';

import {
  ITicketStatusUpdateFilterInput,
  ITicketStatusUpdateInput,
  ITicketStatusUpdateResult,
} from '../resolverTypes';

export const ticketStatusUpdateQuery = gql`
  mutation ticketStatusUpdate(
    $filter: TicketStatusUpdateFilterInput!
    $input: TicketStatusUpdateInput!
  ) {
    ticketStatusUpdate(filter: $filter, input: $input) {
      success
    }
  }
`;

export interface ITicketStatusUpdateRequest
  extends IBaseGraphqlRequest<
    ITicketStatusUpdateInput,
    ITicketStatusUpdateFilterInput
  > {}

export interface ITicketStatusUpdateResponse
  extends IBaseGraphqlResponse<ITicketStatusUpdateInput> {
  data: {
    ticketStatusUpdate: ITicketStatusUpdateResult;
  };
  errors: TGraphqlErrors<ITicketStatusUpdateInput>;
}
