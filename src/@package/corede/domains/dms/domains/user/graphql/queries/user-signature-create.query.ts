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

export const userSignatureCreateQuery = gql`
  ${fileMetadataFragment}
  ${uploadPresignedUrlOutputFragment}

  mutation userSignatureCreate($input: DomainFileCreateOwnInputWithMimeType!) {
    userSignatureCreate(input: $input) {
      presignedUrl {
        ...UploadPresignedUrlOutputFragment
      }
      fileMetadata {
        ...FileMetadataFragment
      }
    }
  }
`;

export interface IUserSignatureCreateRequest
  extends IBaseGraphqlRequest<IDomainFileCreateOwnInputWithMimeType> {}

export interface IUserSignatureCreateResponse
  extends IBaseGraphqlResponse<IDomainFileCreateOwnInputWithMimeType> {
  data: {
    userSignatureCreate: IDomainFileCreateResult;
  };
  errors: TGraphqlErrors<IDomainFileCreateOwnInputWithMimeType>;
}
