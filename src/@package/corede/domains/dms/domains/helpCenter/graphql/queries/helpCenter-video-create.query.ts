import { gql } from "graphql-tag";

import {
  fileMetadataFragment,
  IBaseGraphqlRequest,
  IBaseGraphqlResponse,
  IDomainFileCreateInputWithMimeType,
  IDomainFileCreateResult,
  TGraphqlErrors,
  uploadPresignedUrlOutputFragment,
} from "@common_package";

export const helpCenterVideoCreateQuery = gql`
  ${fileMetadataFragment}
  ${uploadPresignedUrlOutputFragment}

  mutation helpCenterVideoCreate($input: DomainFileCreateInputWithMimeType!) {
    helpCenterVideoCreate(input: $input) {
      presignedUrl {
        ...UploadPresignedUrlFragment
      }
      fileMetadata {
        ...FileMetadataFragment
      }
    }
  }
`;

export interface IHelpCenterVideoCreateRequest
  extends IBaseGraphqlRequest<IDomainFileCreateInputWithMimeType> {}

export interface IHelpCenterVideoCreateResponse
  extends IBaseGraphqlResponse<IDomainFileCreateInputWithMimeType> {
  data: {
    helpCenterVideoCreate: IDomainFileCreateResult;
  };
  errors: TGraphqlErrors<IDomainFileCreateInputWithMimeType>;
}
