import { gql } from "graphql-tag";
import {
  IBaseGraphqlRequest,
  IBaseGraphqlResponse,
  TGraphqlErrors,
} from "@common_package";
import { IUserDetailInput } from "../resolverTypes/user-detail.input";
import { IUserDetailResult } from "../resolverTypes/user-detail.result";
import { userDetailResultFragment } from "../resolverTypes/user-detail-result.fragment";

export const userDetailQuery = gql`
  ${userDetailResultFragment}

  query userDetail($input: UserDetailInput!) {
    userDetail(input: $input) {
      ...UserDetailResultFragment
    }
  }
`;

export interface IUserDetailRequest extends IBaseGraphqlRequest<IUserDetailInput> {}

export interface IUserDetailResponse extends IBaseGraphqlResponse<IUserDetailInput> {
  data: {
    userDetail: IUserDetailResult;
  };
  errors: TGraphqlErrors<IUserDetailInput>;
}
