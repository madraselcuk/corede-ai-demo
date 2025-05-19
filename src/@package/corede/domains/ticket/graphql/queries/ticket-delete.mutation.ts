import {
  IBaseGraphqlRequest,
  IBaseGraphqlResponse,
  TGraphqlErrors,
} from '@common_package';
import gql from 'graphql-tag';
import { ITicketDeleteInput, ITicketDeleteResult } from '../resolverTypes';

export const ticketDeleteQuery = gql`
  mutation ticketDelete($input: TicketDeleteInput!) {
    ticketDelete(input: $input) {
      success
    }
  }
`;

export interface ITicketDeleteRequest
  extends IBaseGraphqlRequest<ITicketDeleteInput> {}

export interface ITicketDeleteResponse
  extends IBaseGraphqlResponse<ITicketDeleteInput> {
  data: {
    ticketDelete: ITicketDeleteResult;
  };
  errors: TGraphqlErrors<ITicketDeleteInput>;
}
