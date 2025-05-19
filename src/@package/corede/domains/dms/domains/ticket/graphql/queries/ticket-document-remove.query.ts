import { gql } from "graphql-tag";

import {
  IBaseGraphqlRequest,
  IBaseGraphqlResponse,
  TGraphqlErrors,
  IEntityFileRemoveInput,
  IEntityFileRemoveResult,
} from "@common_package";

export const ticketDocumentRemoveQuery = gql`
  mutation ticketDocumentRemove($input: EntityFileRemoveInput!) {
    ticketDocumentRemove(input: $input) {
      success
    }
  }
`;

export interface ITicketDocumentRemoveRequest
  extends IBaseGraphqlRequest<IEntityFileRemoveInput> {}

export interface ITicketDocumentRemoveResponse
  extends IBaseGraphqlResponse<IEntityFileRemoveInput> {
  data: {
    ticketDocumentRemove: IEntityFileRemoveResult;
  };
  errors: TGraphqlErrors<IEntityFileRemoveInput>;
}
