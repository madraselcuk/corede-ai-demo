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

export const blogImageCreateQuery = gql`
  ${fileMetadataFragment}
  ${uploadPresignedUrlOutputFragment}

  mutation blogImageCreate($input: DomainFileCreateOwnInputWithMimeType!) {
    blogImageCreate(input: $input) {
      presignedUrl {
        ...UploadPresignedUrlOutputFragment
      }
      fileMetadata {
        ...FileMetadataFragment
      }
    }
  }
`;

export interface IBlogImageCreateRequest
  extends IBaseGraphqlRequest<IDomainFileCreateOwnInputWithMimeType> {}

export interface IBlogImageCreateResponse
  extends IBaseGraphqlResponse<IDomainFileCreateOwnInputWithMimeType> {
  data: {
    blogImageCreate: IDomainFileCreateResult;
  };
  errors: TGraphqlErrors<IDomainFileCreateOwnInputWithMimeType>;
}
