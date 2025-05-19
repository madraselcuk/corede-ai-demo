import { gql } from "graphql-tag";

import {
  IBaseGraphqlRequest,
  IBaseGraphqlResponse,
  ICount,
  TGraphqlErrors,
} from "@common_package";

export const userListCountQuery = gql`
  query userListCount {
    userListCount {
      count
    }
  }
`;

export interface IUserListCountRequest
  extends IBaseGraphqlRequest<undefined, undefined> {}

export interface IUserListCountResponse
  extends IBaseGraphqlResponse<undefined> {
  data: {
    userListCount: ICount;
  };
  errors: TGraphqlErrors<undefined>;
}
