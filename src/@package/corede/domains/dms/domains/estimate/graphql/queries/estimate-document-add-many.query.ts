import { gql } from "graphql-tag";

import {
  IBaseGraphqlRequest,
  IBaseGraphqlResponse,
  TGraphqlErrors,
  IDomainFilesCreateOwnInput,
  IDomainFilesCreateResult,
} from "@common_package";

export const estimateDocumentAddManyQuery = gql`
  mutation estimateDocumentAddMany($input: EntityFilesAssignInput!) {
    estimateDocumentAddMany(input: $input) {
      success
    }
  }
`;

export interface IEstimateDocumentAddManyRequest
  extends IBaseGraphqlRequest<IDomainFilesCreateOwnInput> {}

export interface IEstimateDocumentAddManyResponse
  extends IBaseGraphqlResponse<IDomainFilesCreateOwnInput> {
  data: {
    estimateDocumentAddMany: IDomainFilesCreateResult;
  };
  errors: TGraphqlErrors<IDomainFilesCreateOwnInput>;
}
