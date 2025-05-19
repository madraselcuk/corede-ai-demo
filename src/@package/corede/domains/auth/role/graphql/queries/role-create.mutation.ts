import gql from "graphql-tag";
import {
  IBaseGraphqlRequest,
  IBaseGraphqlResponse,
  TGraphqlErrors,
} from "@common_package";
import { IRoleCreateInput } from "../resolverTypes/role-create.input";
import { IRoleCreateResult } from "../resolverTypes/role-create.result";

export const roleCreateQuery = gql`
  mutation roleCreate($input: RoleCreateInput!) {
    roleCreate(input: $input) {
      _id
    }
  }
`;

export interface IRoleCreateRequest
  extends IBaseGraphqlRequest<IRoleCreateInput> {}

export interface IRoleCreateResponse
  extends IBaseGraphqlResponse<IRoleCreateInput> {
  data: {
    roleCreate: IRoleCreateResult;
  };
  errors: TGraphqlErrors<IRoleCreateInput>;
}
