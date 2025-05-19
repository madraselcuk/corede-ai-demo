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

export const userDocumentCreateManyQuery = gql`
  ${fileMetadataFragment}
  ${uploadPresignedUrlOutputFragment}

  mutation userDocumentCreateMany(
    $input: DomainFilesCreateOwnInputWithMimeType!
  ) {
    userDocumentCreateMany(input: $input) {
      files {
        presignedUrl {
          ...UploadPresignedUrlOutputFragment
        }
        fileMetadata {
          ...FileMetadataFragment
        }
      }
    }
  }
`;

export interface IUserDocumentCreateManyRequest
  extends IBaseGraphqlRequest<IDomainFilesCreateOwnInput> {}

export interface IUserDocumentCreateManyResponse
  extends IBaseGraphqlResponse<IDomainFilesCreateOwnInput> {
  data: {
    userDocumentCreateMany: IDomainFilesCreateResult;
  };
  errors: TGraphqlErrors<IDomainFilesCreateOwnInput>;
}
