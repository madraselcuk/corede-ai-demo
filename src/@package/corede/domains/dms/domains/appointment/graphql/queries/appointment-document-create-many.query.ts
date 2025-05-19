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

export const appointmentDocumentCreateManyQuery = gql`
  ${fileMetadataFragment}
  ${uploadPresignedUrlOutputFragment}

  mutation appointmentDocumentCreateMany(
    $input: DomainFilesCreateOwnInputWithMimeType!
  ) {
    appointmentDocumentCreateMany(input: $input) {
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

export interface IAppointmentDocumentCreateManyRequest
  extends IBaseGraphqlRequest<IDomainFilesCreateOwnInput> {}

export interface IAppointmentDocumentCreateManyResponse
  extends IBaseGraphqlResponse<IDomainFilesCreateOwnInput> {
  data: {
    appointmentDocumentCreateMany: IDomainFilesCreateResult;
  };
  errors: TGraphqlErrors<IDomainFilesCreateOwnInput>;
}
