import gql from "graphql-tag";
import {
  IBaseGraphqlRequest,
  IBaseGraphqlResponse,
  TGraphqlErrors,
} from "@common_package";
import { IUserDeleteInput } from "../resolverTypes/user-delete.input";
import { IUserDeleteResult } from "../resolverTypes/user-delete.result";

export const userDeleteQuery = gql`
  mutation userDelete($input: UserDeleteInput!) {
    userDelete(input: $input) {
      success
    }
  }
`;

export interface IUserDeleteRequest
  extends IBaseGraphqlRequest<IUserDeleteInput> {}

export interface IUserDeleteResponse
  extends IBaseGraphqlResponse<IUserDeleteInput> {
  data: {
    userDelete: IUserDeleteResult;
  };
  errors: TGraphqlErrors<IUserDeleteInput>;
}
