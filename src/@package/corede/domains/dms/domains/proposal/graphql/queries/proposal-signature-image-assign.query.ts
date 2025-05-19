import { gql } from "graphql-tag";

import {
  IBaseGraphqlRequest,
  IBaseGraphqlResponse,
  TGraphqlErrors,
  IEntityFilesAssignInput,
  IEntityFilesAssignResult,
} from "@common_package";

export const proposalSignatureImageAssignQuery = gql`
  mutation proposalSignatureImageAssign($input: EntityFilesAssignInput!) {
    proposalSignatureImageAssign(input: $input) {
      success
    }
  }
`;

export interface IProposalSignatureImageAssignRequest
  extends IBaseGraphqlRequest<IEntityFilesAssignInput> {}

export interface IProposalSignatureImageAssignResponse
  extends IBaseGraphqlResponse<IEntityFilesAssignInput> {
  data: {
    proposalSignatureImageAssign: IEntityFilesAssignResult;
  };
  errors: TGraphqlErrors<IEntityFilesAssignInput>;
}
