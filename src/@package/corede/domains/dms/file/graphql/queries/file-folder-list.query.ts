import { gql } from "graphql-tag";

import {
  IBaseGraphqlRequest,
  IBaseGraphqlResponse,
  TGraphqlErrors,
} from "@common_package";

import { userProfileMetadataFragment } from "../../../../user";
import { IFileFolderListInput, IFileFolderListResult } from "../resolverTypes";

export const fileFolderListQuery = gql`
  ${userProfileMetadataFragment}

  query fileFolderList($input: FileFolderListInput) {
    fileFolderList(input: $input) {
      folders {
        folder
        size
        fileCount
        fileCreatorList {
          ...UserProfileMetadataFragment
        }
      }
    }
  }
`;

export interface IFileFolderListRequest
  extends IBaseGraphqlRequest<IFileFolderListInput, undefined> {}

export interface IFileFolderListResponse
  extends IBaseGraphqlResponse<IFileFolderListInput> {
  data: {
    fileFolderList: IFileFolderListResult;
  };
  errors: TGraphqlErrors<IFileFolderListInput>;
}
