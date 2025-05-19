import { gql } from "graphql-tag";
import {
  IBaseGraphqlRequest,
  IBaseGraphqlResponse,
  TGraphqlErrors,
} from "@common_package";
import { IUserDetailOwnInput } from "../resolverTypes/user-detail-own.input";
import { IUserDetailOwnResult } from "../resolverTypes/user-detail-own.result";
import { userDetailOwnResultFragment } from "../resolverTypes/user-detail-own-result.fragment";

export const userDetailOwnQuery = gql`
  ${userDetailOwnResultFragment}

  query userDetailOwn {
    userDetailOwn {
      ...UserDetailOwnResultFragment
    }
  }
`;

export interface IUserDetailOwnRequest
  extends IBaseGraphqlRequest<IUserDetailOwnInput> {}

export interface IUserDetailOwnResponse
  extends IBaseGraphqlResponse<IUserDetailOwnInput> {
  data: {
    userDetailOwn: IUserDetailOwnResult;
  };
  errors: TGraphqlErrors<IUserDetailOwnInput>;
}
