import {
  IBaseGraphqlRequest,
  IBaseGraphqlResponse,
  TGraphqlErrors,
} from "@common_package";
import gql from "graphql-tag";
import { IHelpCenterDeleteInput } from "../resolverTypes/helpCenter-delete.input";
import { IHelpCenterDeleteResult } from "../resolverTypes/helpCenter-delete.result";

export const helpCenterDeleteQuery = gql`
  mutation helpCenterDelete($input: HelpCenterDeleteInput!) {
    helpCenterDelete(input: $input) {
      success
    }
  }
`;

export interface IHelpCenterDeleteRequest
  extends IBaseGraphqlRequest<IHelpCenterDeleteInput> {}

export interface IHelpCenterDeleteResponse
  extends IBaseGraphqlResponse<IHelpCenterDeleteInput> {
  data: {
    helpCenterDelete: IHelpCenterDeleteResult;
  };
  errors: TGraphqlErrors<IHelpCenterDeleteInput>;
}
