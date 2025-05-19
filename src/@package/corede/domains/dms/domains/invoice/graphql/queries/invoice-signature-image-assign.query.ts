import { gql } from "graphql-tag";

import {
  IBaseGraphqlRequest,
  IBaseGraphqlResponse,
  TGraphqlErrors,
  IEntityFilesAssignInput,
  IEntityFilesAssignResult,
} from "@common_package";

export const invoiceSignatureImageAssignQuery = gql`
  mutation invoiceSignatureImageAssign($input: EntityFilesAssignInput!) {
    invoiceSignatureImageAssign(input: $input) {
      success
    }
  }
`;

export interface IInvoiceSignatureImageAssignRequest
  extends IBaseGraphqlRequest<IEntityFilesAssignInput> {}

export interface IInvoiceSignatureImageAssignResponse
  extends IBaseGraphqlResponse<IEntityFilesAssignInput> {
  data: {
    invoiceSignatureImageAssign: IEntityFilesAssignResult;
  };
  errors: TGraphqlErrors<IEntityFilesAssignInput>;
}
