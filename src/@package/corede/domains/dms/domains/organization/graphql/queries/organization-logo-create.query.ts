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

export const organizationLogoCreateQuery = gql`
  ${fileMetadataFragment}
  ${uploadPresignedUrlOutputFragment}

  mutation organizationLogoCreate(
    $input: DomainFileCreateOwnInputWithMimeType!
  ) {
    organizationLogoCreate(input: $input) {
      presignedUrl {
        ...UploadPresignedUrlOutputFragment
      }
      fileMetadata {
        ...FileMetadataFragment
      }
    }
  }
`;

export interface IOrganizationLogoCreateRequest
  extends IBaseGraphqlRequest<IDomainFileCreateOwnInputWithMimeType> {}

export interface IOrganizationLogoCreateResponse
  extends IBaseGraphqlResponse<IDomainFileCreateOwnInputWithMimeType> {
  data: {
    organizationLogoCreate: IDomainFileCreateResult;
  };
  errors: TGraphqlErrors<IDomainFileCreateOwnInputWithMimeType>;
}
