import gql from "graphql-tag";
import {
  IBaseGraphqlRequest,
  IBaseGraphqlResponse,
  TGraphqlErrors,
} from "@common_package";
import {
  IPermissionUpdateFilterInput,
  IPermissionUpdateInput,
} from "../resolverTypes/permission-update.input";
import { IPermissionUpdateResult } from "../resolverTypes/permission-update.result";

export const permissionUpdateQuery = gql`
  mutation permissionUpdate(
    $filter: PermissionUpdateFilterInput!
    $input: PermissionUpdateInput!
  ) {
    permissionUpdate(filter: $filter, input: $input) {
      _id
    }
  }
`;

export interface IPermissionUpdateRequest
  extends IBaseGraphqlRequest<
    IPermissionUpdateInput,
    IPermissionUpdateFilterInput
  > {}

export interface IPermissionUpdateResponse
  extends IBaseGraphqlResponse<IPermissionUpdateInput> {
  data: {
    permissionUpdate: IPermissionUpdateResult;
  };
  errors: TGraphqlErrors<IPermissionUpdateInput>;
}
