import { gql } from "graphql-tag";

import { IGetDownloadPresignedUrlResult } from "../resolverTypes/get-download-presigned-url.result";
import { IGetDownloadPresignedUrlInput } from "../resolverTypes/get-download-presigned-url.input";
import {
  IBaseGraphqlRequest,
  IBaseGraphqlResponse,
  TGraphqlErrors,
} from "../../../../../graphql";

export const getDownloadPresignedUrlQuery = gql`
  query getDownloadPresignedUrl($input: GetDownloadPresignedUrlInput!) {
    getDownloadPresignedUrl(input: $input) {
      presignedUrl
    }
  }
`;

export interface IGetDownloadPresignedUrlRequest
  extends IBaseGraphqlRequest<IGetDownloadPresignedUrlInput> {}

export interface IGetDownloadPresignedUrlResponse
  extends IBaseGraphqlResponse<IGetDownloadPresignedUrlInput> {
  data: {
    getDownloadPresignedUrl: IGetDownloadPresignedUrlResult;
  };
  errors: TGraphqlErrors<IGetDownloadPresignedUrlInput>;
}
