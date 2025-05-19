import { gql } from "graphql-tag";

import {
  IBaseGraphqlRequest,
  IBaseGraphqlResponse,
  TGraphqlErrors,
  IEntityFileRemoveInput,
  IEntityFileRemoveResult,
} from "@common_package";

export const proposalDocumentRemoveQuery = gql`
  mutation proposalDocumentRemove($input: EntityFileRemoveInput!) {
    proposalDocumentRemove(input: $input) {
      success
    }
  }
`;

export interface IProposalDocumentRemoveRequest
  extends IBaseGraphqlRequest<IEntityFileRemoveInput> {}

export interface IProposalDocumentRemoveResponse
  extends IBaseGraphqlResponse<IEntityFileRemoveInput> {
  data: {
    proposalDocumentRemove: IEntityFileRemoveResult;
  };
  errors: TGraphqlErrors<IEntityFileRemoveInput>;
}
