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

export const estimateSignatureImageCreateQuery = gql`
  ${fileMetadataFragment}
  ${uploadPresignedUrlOutputFragment}

  mutation estimateSignatureImageCreate(
    $input: DomainFileCreateOwnInputWithMimeType!
  ) {
    estimateSignatureImageCreate(input: $input) {
      presignedUrl {
        ...UploadPresignedUrlOutputFragment
      }
      fileMetadata {
        ...FileMetadataFragment
      }
    }
  }
`;

export interface IEstimateSignatureImageCreateRequest
  extends IBaseGraphqlRequest<IDomainFilesCreateOwnInput> {}

export interface IEstimateSignatureImageCreateResponse
  extends IBaseGraphqlResponse<IDomainFilesCreateOwnInput> {
  data: {
    estimateSignatureImageCreate: IDomainFilesCreateResult;
  };
  errors: TGraphqlErrors<IDomainFilesCreateOwnInput>;
}
