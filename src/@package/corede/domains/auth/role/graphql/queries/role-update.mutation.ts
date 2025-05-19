import gql from "graphql-tag";
import {
  IBaseGraphqlRequest,
  IBaseGraphqlResponse,
  TGraphqlErrors,
} from "@common_package";
import {
  IRoleUpdateInput,
  IRoleUpdateFilterInput,
} from "../resolverTypes/role-update.input";
import { IRoleUpdateResult } from "../resolverTypes/role-update.result";

export const roleUpdateQuery = gql`
  mutation roleUpdate(
    $filter: RoleUpdateFilterInput!
    $input: RoleUpdateInput!
  ) {
    roleUpdate(filter: $filter, input: $input) {
      _id
    }
  }
`;

export interface IRoleUpdateRequest
  extends IBaseGraphqlRequest<IRoleUpdateInput, IRoleUpdateFilterInput> {}

export interface IRoleUpdateResponse
  extends IBaseGraphqlResponse<IRoleUpdateInput> {
  data: {
    roleUpdate: IRoleUpdateResult;
  };
  errors: TGraphqlErrors<IRoleUpdateInput>;
}
