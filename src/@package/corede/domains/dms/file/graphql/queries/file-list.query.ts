import { gql } from "graphql-tag";

import {
  IBaseGraphqlRequest,
  IBaseGraphqlResponse,
  TGraphqlErrors,
} from "@common_package";

import { IFileListResult } from "../resolverTypes/file-list.result";
import { IFileListInput } from "../resolverTypes";
import { fileListItemResultFragment } from "./file-list.item.result.fragment";

export const fileListQuery = gql`
  ${fileListItemResultFragment}

  query fileList($input: FileListInput) {
    fileList(input: $input) {
      data {
        ...FileListItemResultFragment
      }
      count
    }
  }
`;

export interface IFileListRequest
  extends IBaseGraphqlRequest<IFileListInput, undefined> {}

export interface IFileListResponse
  extends IBaseGraphqlResponse<IFileListInput> {
  data: {
    fileList: IFileListResult;
  };
  errors: TGraphqlErrors<IFileListInput>;
}
