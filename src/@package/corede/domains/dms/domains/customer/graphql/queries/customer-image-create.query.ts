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

export const customerImageCreateQuery = gql`
  ${fileMetadataFragment}
  ${uploadPresignedUrlOutputFragment}

  mutation customerImageCreate($input: DomainFileCreateOwnInputWithMimeType!) {
    customerImageCreate(input: $input) {
      presignedUrl {
        ...UploadPresignedUrlOutputFragment
      }
      fileMetadata {
        ...FileMetadataFragment
      }
    }
  }
`;

export interface ICustomerImageCreateRequest
  extends IBaseGraphqlRequest<IDomainFileCreateOwnInputWithMimeType> {}

export interface ICustomerImageCreateResponse
  extends IBaseGraphqlResponse<IDomainFileCreateOwnInputWithMimeType> {
  data: {
    customerImageCreate: IDomainFileCreateResult;
  };
  errors: TGraphqlErrors<IDomainFileCreateOwnInputWithMimeType>;
}
