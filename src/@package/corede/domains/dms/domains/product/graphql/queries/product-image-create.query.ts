import { gql } from "graphql-tag";

import {
  fileMetadataFragment,
  IBaseGraphqlRequest,
  IBaseGraphqlResponse,
  IDomainFileCreateOwnInputWithMimeType,
  IDomainFileCreateResult,
  TGraphqlErrors,
  uploadPresignedUrlOutputFragment,
} from "@common_package";

export const productImageCreateQuery = gql`
  ${fileMetadataFragment}
  ${uploadPresignedUrlOutputFragment}

  mutation productImageCreate($input: DomainFileCreateOwnInputWithMimeType!) {
    productImageCreate(input: $input) {
      presignedUrl {
        ...UploadPresignedUrlOutputFragment
      }
      fileMetadata {
        ...FileMetadataFragment
      }
    }
  }
`;

export interface IProductImageCreateRequest
  extends IBaseGraphqlRequest<IDomainFileCreateOwnInputWithMimeType> {}

export interface IProductImageCreateResponse
  extends IBaseGraphqlResponse<IDomainFileCreateOwnInputWithMimeType> {
  data: {
    productImageCreate: IDomainFileCreateResult;
  };
  errors: TGraphqlErrors<IDomainFileCreateOwnInputWithMimeType>;
}
