import { gql } from "graphql-tag";

import {
  IBaseGraphqlRequest,
  IBaseGraphqlResponse,
  TGraphqlErrors,
  IDomainFilesCreateOwnInput,
  IDomainFilesCreateResult,
  fileMetadataFragment,
  uploadPresignedUrlOutputFragment,
} from "@common_package";

export const invoiceSignatureImageCreateQuery = gql`
  ${fileMetadataFragment}
  ${uploadPresignedUrlOutputFragment}

  mutation invoiceSignatureImageCreate(
    $input: DomainFileCreateOwnInputWithMimeType!
  ) {
    invoiceSignatureImageCreate(input: $input) {
      presignedUrl {
        ...UploadPresignedUrlOutputFragment
      }
      fileMetadata {
        ...FileMetadataFragment
      }
    }
  }
`;

export interface IInvoiceSignatureImageCreateRequest
  extends IBaseGraphqlRequest<IDomainFilesCreateOwnInput> {}

export interface IInvoiceSignatureImageCreateResponse
  extends IBaseGraphqlResponse<IDomainFilesCreateOwnInput> {
  data: {
    invoiceSignatureImageCreate: IDomainFilesCreateResult;
  };
  errors: TGraphqlErrors<IDomainFilesCreateOwnInput>;
}
