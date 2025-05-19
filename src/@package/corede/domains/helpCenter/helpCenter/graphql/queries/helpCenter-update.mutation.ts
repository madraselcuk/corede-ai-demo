import {
  IBaseGraphqlRequest,
  IBaseGraphqlResponse,
  TGraphqlErrors,
} from "@common_package";
import gql from "graphql-tag";
import {
  IHelpCenterUpdateInput,
  IHelpCenterUpdateFilterInput,
} from "../resolverTypes/helpCenter-update.input";
import { IHelpCenterUpdateResult } from "../resolverTypes/helpCenter-update.result";

export const helpCenterUpdateQuery = gql`
  mutation helpCenterUpdate(
    $filter: HelpCenterUpdateFilterInput!
    $input: HelpCenterUpdateInput!
  ) {
    helpCenterUpdate(filter: $filter, input: $input) {
      _id
    }
  }
`;

export interface IHelpCenterUpdateRequest
  extends IBaseGraphqlRequest<
    IHelpCenterUpdateInput,
    IHelpCenterUpdateFilterInput
  > {}

export interface IHelpCenterUpdateResponse
  extends IBaseGraphqlResponse<IHelpCenterUpdateInput> {
  data: {
    helpCenterUpdate: IHelpCenterUpdateResult;
  };
  errors: TGraphqlErrors<IHelpCenterUpdateInput>;
}
