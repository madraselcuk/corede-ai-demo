import { gql } from "graphql-tag";

import {
  IBaseGraphqlRequest,
  IBaseGraphqlResponse,
  TGraphqlErrors,
  IEntityFilesAssignInput,
  IEntityFilesAssignResult,
} from "@common_package";

export const invoiceDocumentAddManyQuery = gql`
  mutation invoiceDocumentAddMany($input: EntityFilesAssignInput!) {
    invoiceDocumentAddMany(input: $input) {
      success
    }
  }
`;

export interface IInvoiceDocumentAddManyRequest
  extends IBaseGraphqlRequest<IEntityFilesAssignInput> {}

export interface IInvoiceDocumentAddManyResponse
  extends IBaseGraphqlResponse<IEntityFilesAssignInput> {
  data: {
    invoiceDocumentAddMany: IEntityFilesAssignResult;
  };
  errors: TGraphqlErrors<IEntityFilesAssignInput>;
}
