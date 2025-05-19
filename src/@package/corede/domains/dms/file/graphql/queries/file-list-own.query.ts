import { gql } from "graphql-tag";

import {
  IBaseGraphqlRequest,
  IBaseGraphqlResponse,
  TGraphqlErrors,
} from "@common_package";

import { IFileListOwnResult } from "../resolverTypes/file-list-own.result";
import { IFileListOwnInput } from "../resolverTypes";
import { fileListOwnItemResultFragment } from "./file-list-own.item.result.fragment";

export const fileListOwnQuery = gql`
  ${fileListOwnItemResultFragment}

  query fileListOwn($input: FileListOwnInput) {
    fileListOwn(input: $input) {
      data {
        ...FileListOwnItemResultFragment
      }
      count
    }
  }
`;

export interface IFileListOwnRequest
  extends IBaseGraphqlRequest<IFileListOwnInput, undefined> {}

export interface IFileListOwnResponse
  extends IBaseGraphqlResponse<IFileListOwnInput> {
  data: {
    fileListOwn: IFileListOwnResult;
  };
  errors: TGraphqlErrors<IFileListOwnInput>;
}
