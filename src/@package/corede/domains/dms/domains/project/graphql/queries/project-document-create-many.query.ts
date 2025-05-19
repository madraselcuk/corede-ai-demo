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

export const projectDocumentCreateManyQuery = gql`
  ${fileMetadataFragment}
  ${uploadPresignedUrlOutputFragment}

  mutation projectDocumentCreateMany(
    $input: DomainFilesCreateOwnInputWithMimeType!
  ) {
    projectDocumentCreateMany(input: $input) {
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

export interface IProjectDocumentCreateManyRequest
  extends IBaseGraphqlRequest<IDomainFilesCreateOwnInput> {}

export interface IProjectDocumentCreateManyResponse
  extends IBaseGraphqlResponse<IDomainFilesCreateOwnInput> {
  data: {
    projectDocumentCreateMany: IDomainFilesCreateResult;
  };
  errors: TGraphqlErrors<IDomainFilesCreateOwnInput>;
}
