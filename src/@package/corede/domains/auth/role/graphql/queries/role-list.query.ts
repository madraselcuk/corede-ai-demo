import { gql } from "graphql-tag";
import {
  IBaseGraphqlRequest,
  IBaseGraphqlResponse,
  TGraphqlErrors,
} from "@common_package";
import { IRoleListInput } from "../resolverTypes/role-list.input";
import { IRoleListResult } from "../resolverTypes/role-list.result";
import { roleListItemResultFragment } from "./role-list-item.result.fragment";

export const roleListQuery = gql`
  ${roleListItemResultFragment}

  query roleList($input: RoleListInput) {
    roleList(input: $input) {
      data {
        ...RoleListItemResultFragment
      }
      count
    }
  }
`;

export interface IRoleListRequest
  extends IBaseGraphqlRequest<IRoleListInput, undefined> {}

export interface IRoleListResponse
  extends IBaseGraphqlResponse<IRoleListInput> {
  data: {
    roleList: IRoleListResult;
  };
  errors: TGraphqlErrors<IRoleListInput>;
}
