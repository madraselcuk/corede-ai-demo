import { gql } from "graphql-tag";

import {
  IBaseGraphqlRequest,
  IBaseGraphqlResponse,
  TGraphqlErrors,
} from "@common_package";

import { IFileListResult } from "../resolverTypes/file-list.result";
import { IFileListInput } from "../resolverTypes";
import { fileListItemResultFragment } from "./file-list.item.result.fragment";

export const fileListByRelatedQuery = gql`
  ${fileListItemResultFragment}

  query fileListByRelated($input: FileListInput) {
    fileListByRelated(input: $input) {
      data {
        ...FileListItemResultFragment
      }
      count
    }
  }
`;

export interface IFileListByRelatedRequest
  extends IBaseGraphqlRequest<IFileListInput, undefined> {}

export interface IFileListByRelatedResponse
  extends IBaseGraphqlResponse<IFileListInput> {
  data: {
    fileListByRelated: IFileListResult;
  };
  errors: TGraphqlErrors<IFileListInput>;
}
