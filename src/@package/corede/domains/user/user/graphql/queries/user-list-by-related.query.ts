import gql from "graphql-tag";
import {
  IBaseGraphqlRequest,
  IBaseGraphqlResponse,
  TGraphqlErrors,
} from "@common_package";
import {
  IUserListByRelatedInput,
  IUserListByRelatedResult,
} from "../resolverTypes";
import { userListByRelatedItemResultFragment } from "../resolverTypes/user-list-by-related-item-result.fragment";

export const userListByRelatedQuery = gql`
  ${userListByRelatedItemResultFragment}

  query userListByRelated($input: UserListByRelatedInput) {
    userListByRelated(input: $input) {
      count
      data {
        ...UserListByRelatedItemResultFragment
      }
    }
  }
`;

export interface IUserListByRelatedRequest
  extends IBaseGraphqlRequest<IUserListByRelatedInput> {}

export interface IUserListByRelatedResponse
  extends IBaseGraphqlResponse<IUserListByRelatedInput> {
  data: {
    userListByRelated: IUserListByRelatedResult;
  };
  errors: TGraphqlErrors<IUserListByRelatedInput>;
}
