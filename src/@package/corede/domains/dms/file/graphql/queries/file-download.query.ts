import { gql } from "graphql-tag";

import {
  IBaseGraphqlRequest,
  IBaseGraphqlResponse,
  TGraphqlErrors,
} from "@common_package";
import { IFileDownloadInput, IFileDownloadResult } from "../resolverTypes";

export const fileDownloadQuery = gql`
  query fileDownload($input: FileDownloadInput!) {
    fileDownload(input: $input) {
      downloadPresignedUrl
      expiresIn
    }
  }
`;

export interface IFileDownloadRequest
  extends IBaseGraphqlRequest<IFileDownloadInput, undefined> {}

export interface IFileDownloadResponse
  extends IBaseGraphqlResponse<IFileDownloadInput> {
  data: {
    fileDownload: IFileDownloadResult;
  };
  errors: TGraphqlErrors<IFileDownloadInput>;
}
