import { gql } from 'graphql-tag';

import {
  IBaseGraphqlRequest,
  IBaseGraphqlResponse,
  TGraphqlErrors,
  IDomainFilesCreateOwnInput,
  IDomainFilesCreateResult,
  fileMetadataFragment,
  uploadPresignedUrlOutputFragment,
} from '@common_package';

export const expenseDocumentCreateManyQuery = gql`
  ${fileMetadataFragment}
  ${uploadPresignedUrlOutputFragment}

  mutation expenseDocumentCreateMany(
    $input: DomainFilesCreateOwnInputWithMimeType!
  ) {
    expenseDocumentCreateMany(input: $input) {
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

export interface IExpenseDocumentCreateManyRequest
  extends IBaseGraphqlRequest<IDomainFilesCreateOwnInput> {}

export interface IExpenseDocumentCreateManyResponse
  extends IBaseGraphqlResponse<IDomainFilesCreateOwnInput> {
  data: {
    expenseDocumentCreateMany: IDomainFilesCreateResult;
  };
  errors: TGraphqlErrors<IDomainFilesCreateOwnInput>;
}
