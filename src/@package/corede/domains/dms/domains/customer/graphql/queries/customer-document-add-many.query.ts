import { gql } from "graphql-tag";

import {
  IBaseGraphqlRequest,
  IBaseGraphqlResponse,
  TGraphqlErrors,
  IEntityFilesAssignInput,
  IEntityFilesAssignResult,
} from "@common_package";

export const customerDocumentAddManyQuery = gql`
  mutation customerDocumentAddMany($input: EntityFilesAssignInput!) {
    customerDocumentAddMany(input: $input) {
      success
    }
  }
`;

export interface ICustomerDocumentAddManyRequest
  extends IBaseGraphqlRequest<IEntityFilesAssignInput> {}

export interface ICustomerDocumentAddManyResponse
  extends IBaseGraphqlResponse<IEntityFilesAssignInput> {
  data: {
    customerDocumentAddMany: IEntityFilesAssignResult;
  };
  errors: TGraphqlErrors<IEntityFilesAssignInput>;
}
