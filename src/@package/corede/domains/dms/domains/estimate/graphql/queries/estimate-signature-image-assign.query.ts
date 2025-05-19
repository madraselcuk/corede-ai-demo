import { gql } from "graphql-tag";

import {
  IBaseGraphqlRequest,
  IBaseGraphqlResponse,
  TGraphqlErrors,
  IEntityFilesAssignInput,
  IEntityFilesAssignResult,
} from "@common_package";

export const estimateSignatureImageAssignQuery = gql`
  mutation estimateSignatureImageAssign($input: EntityFilesAssignInput!) {
    estimateSignatureImageAssign(input: $input) {
      success
    }
  }
`;

export interface IEstimateSignatureImageAssignRequest
  extends IBaseGraphqlRequest<IEntityFilesAssignInput> {}

export interface IEstimateSignatureImageAssignResponse
  extends IBaseGraphqlResponse<IEntityFilesAssignInput> {
  data: {
    estimateSignatureImageAssign: IEntityFilesAssignResult;
  };
  errors: TGraphqlErrors<IEntityFilesAssignInput>;
}
