import { gql } from "graphql-tag";

import {
  IBaseGraphqlRequest,
  IBaseGraphqlResponse,
  TGraphqlErrors,
  IEntityFilesAssignInput,
  IEntityFilesAssignResult,
} from "@common_package";

export const proposalDocumentAddManyQuery = gql`
  mutation proposalDocumentAddMany($input: EntityFilesAssignInput!) {
    proposalDocumentAddMany(input: $input) {
      success
    }
  }
`;

export interface IProposalDocumentAddManyRequest
  extends IBaseGraphqlRequest<IEntityFilesAssignInput> {}

export interface IProposalDocumentAddManyResponse
  extends IBaseGraphqlResponse<IEntityFilesAssignInput> {
  data: {
    proposalDocumentAddMany: IEntityFilesAssignResult;
  };
  errors: TGraphqlErrors<IEntityFilesAssignInput>;
}
