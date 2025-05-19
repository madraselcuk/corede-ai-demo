import {
  IBaseGraphqlRequest,
  IBaseGraphqlResponse,
  TGraphqlErrors,
} from "@common_package";
import gql from "graphql-tag";
import {
  IFileUpdateInput,
  IFileUpdateFilterInput,
} from "../resolverTypes/file-update.input";
import { IFileUpdateResult } from "../resolverTypes/file-update.result";

export const fileUpdateQuery = gql`
  mutation fileUpdate(
    $filter: FileUpdateFilterInput!
    $input: FileUpdateInput!
  ) {
    fileUpdate(filter: $filter, input: $input) {
      _id
    }
  }
`;

export interface IFileUpdateRequest
  extends IBaseGraphqlRequest<IFileUpdateInput, IFileUpdateFilterInput> {}

export interface IFileUpdateResponse
  extends IBaseGraphqlResponse<IFileUpdateInput> {
  data: {
    fileUpdate: IFileUpdateResult;
  };
  errors: TGraphqlErrors<IFileUpdateInput>;
}
