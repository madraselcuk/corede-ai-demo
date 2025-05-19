import { gql } from "graphql-tag";

import {
  IBaseGraphqlRequest,
  IBaseGraphqlResponse,
  TGraphqlErrors,
} from "@common_package";
import { IFileDetailInput } from "../resolverTypes/file-detail.input";
import { IFileDetailResult } from "../resolverTypes/file-detail.result";
import { fileDetailResultFragment } from "./file-detail.result.fragment";

export const fileDetailQuery = gql`
  ${fileDetailResultFragment}

  query fileDetail($input: FileDetailInput!) {
    fileDetail(input: $input) {
      ...FileDetailResultFragment
    }
  }
`;

export interface IFileDetailRequest
  extends IBaseGraphqlRequest<IFileDetailInput, undefined> {}

export interface IFileDetailResponse
  extends IBaseGraphqlResponse<IFileDetailInput> {
  data: {
    fileDetail: IFileDetailResult;
  };
  errors: TGraphqlErrors<IFileDetailInput>;
}
