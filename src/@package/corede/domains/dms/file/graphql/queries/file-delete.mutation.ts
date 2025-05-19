import {
  IBaseGraphqlRequest,
  IBaseGraphqlResponse,
  TGraphqlErrors,
} from "@common_package";
import gql from "graphql-tag";
import { IFileDeleteInput, IFileDeleteResult } from "../resolverTypes";

export const fileDeleteQuery = gql`
  mutation fileDelete($input: FileDeleteInput!) {
    fileDelete(input: $input) {
      success
    }
  }
`;

export interface IFileDeleteRequest
  extends IBaseGraphqlRequest<IFileDeleteInput> {}

export interface IFileDeleteResponse
  extends IBaseGraphqlResponse<IFileDeleteInput> {
  data: {
    fileDelete: IFileDeleteResult;
  };
  errors: TGraphqlErrors<IFileDeleteInput>;
}
