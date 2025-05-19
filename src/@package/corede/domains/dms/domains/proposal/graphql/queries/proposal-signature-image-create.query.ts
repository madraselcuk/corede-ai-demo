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

export const proposalSignatureImageCreateQuery = gql`
  ${fileMetadataFragment}
  ${uploadPresignedUrlOutputFragment}

  mutation proposalSignatureImageCreate(
    $input: DomainFileCreateOwnInputWithMimeType!
  ) {
    proposalSignatureImageCreate(input: $input) {
      presignedUrl {
        ...UploadPresignedUrlOutputFragment
      }
      fileMetadata {
        ...FileMetadataFragment
      }
    }
  }
`;

export interface IProposalSignatureImageCreateRequest
  extends IBaseGraphqlRequest<IDomainFilesCreateOwnInput> {}

export interface IProposalSignatureImageCreateResponse
  extends IBaseGraphqlResponse<IDomainFilesCreateOwnInput> {
  data: {
    proposalSignatureImageCreate: IDomainFilesCreateResult;
  };
  errors: TGraphqlErrors<IDomainFilesCreateOwnInput>;
}
