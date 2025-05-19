import {
  IBaseGraphqlRequest,
  IBaseGraphqlResponse,
  TGraphqlErrors,
} from '@common_package';
import gql from 'graphql-tag';
import { ITicketCreateInput, ITicketCreateResult } from '../resolverTypes';

export const ticketCreateQuery = gql`
  mutation ticketCreate($input: TicketCreateInput!) {
    ticketCreate(input: $input) {
      _id
    }
  }
`;

export interface ITicketCreateRequest
  extends IBaseGraphqlRequest<ITicketCreateInput> {}

export interface ITicketCreateResponse
  extends IBaseGraphqlResponse<ITicketCreateInput> {
  data: {
    ticketCreate: ITicketCreateResult;
  };
  errors: TGraphqlErrors<ITicketCreateInput>;
}
