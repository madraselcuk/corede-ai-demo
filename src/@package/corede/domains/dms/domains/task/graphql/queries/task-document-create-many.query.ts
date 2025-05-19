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

export const taskDocumentCreateManyQuery = gql`
  ${fileMetadataFragment}
  ${uploadPresignedUrlOutputFragment}

  mutation taskDocumentCreateMany(
    $input: DomainFilesCreateOwnInputWithMimeType!
  ) {
    taskDocumentCreateMany(input: $input) {
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

export interface ITaskDocumentCreateManyRequest
  extends IBaseGraphqlRequest<IDomainFilesCreateOwnInput> {}

export interface ITaskDocumentCreateManyResponse
  extends IBaseGraphqlResponse<IDomainFilesCreateOwnInput> {
  data: {
    taskDocumentCreateMany: IDomainFilesCreateResult;
  };
  errors: TGraphqlErrors<IDomainFilesCreateOwnInput>;
}
