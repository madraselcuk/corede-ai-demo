import {
  IBaseGraphqlRequest,
  IBaseGraphqlResponse,
  TGraphqlErrors,
} from "@common_package";
import gql from "graphql-tag";
import {
  IHelpCenterCategoryUpdateInput,
  IHelpCenterCategoryUpdateFilterInput,
} from "../resolverTypes/helpCenterCategory-update.input";
import { IHelpCenterCategoryUpdateResult } from "../resolverTypes/helpCenterCategory-update.result";

export const helpCenterCategoryUpdateQuery = gql`
  mutation helpCenterCategoryUpdate(
    $filter: HelpCenterCategoryUpdateFilterInput!
    $input: HelpCenterCategoryUpdateInput!
  ) {
    helpCenterCategoryUpdate(filter: $filter, input: $input) {
      _id
    }
  }
`;

export interface IHelpCenterCategoryUpdateRequest
  extends IBaseGraphqlRequest<
    IHelpCenterCategoryUpdateInput,
    IHelpCenterCategoryUpdateFilterInput
  > {}

export interface IHelpCenterCategoryUpdateResponse
  extends IBaseGraphqlResponse<IHelpCenterCategoryUpdateInput> {
  data: {
    helpCenterCategoryUpdate: IHelpCenterCategoryUpdateResult;
  };
  errors: TGraphqlErrors<IHelpCenterCategoryUpdateInput>;
}
