import gql from "graphql-tag";
import {
  IBaseGraphqlRequest,
  IBaseGraphqlResponse,
  TGraphqlErrors,
} from "@common_package";
import { IUserListInput } from "../resolverTypes/user-list.input";
import { IUserListResult } from "../resolverTypes/user-list.result";
import { userListItemResultFragment } from "../resolverTypes/user-list-item-result.fragment";

export const userListQuery = gql`
  ${userListItemResultFragment}

  query userList($input: UserListInput) {
    userList(input: $input) {
      count
      data {
        ...UserListItemResultFragment
      }
    }
  }
`;

export interface IUserListRequest extends IBaseGraphqlRequest<IUserListInput> {}

export interface IUserListResponse
  extends IBaseGraphqlResponse<IUserListInput> {
  data: {
    userList: IUserListResult;
  };
  errors: TGraphqlErrors<IUserListInput>;
}
