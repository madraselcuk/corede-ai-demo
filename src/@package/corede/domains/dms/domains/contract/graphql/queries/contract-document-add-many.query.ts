import { gql } from "graphql-tag";

import {
  IBaseGraphqlRequest,
  IBaseGraphqlResponse,
  TGraphqlErrors,
  IEntityFilesAssignInput,
  IEntityFilesAssignResult,
} from "@common_package";

export const contractDocumentAddManyQuery = gql`
  mutation contractDocumentAddMany($input: EntityFilesAssignInput!) {
    contractDocumentAddMany(input: $input) {
      success
    }
  }
`;

export interface IContractDocumentAddManyRequest
  extends IBaseGraphqlRequest<IEntityFilesAssignInput> {}

export interface IContractDocumentAddManyResponse
  extends IBaseGraphqlResponse<IEntityFilesAssignInput> {
  data: {
    contractDocumentAddMany: IEntityFilesAssignResult;
  };
  errors: TGraphqlErrors<IEntityFilesAssignInput>;
}
