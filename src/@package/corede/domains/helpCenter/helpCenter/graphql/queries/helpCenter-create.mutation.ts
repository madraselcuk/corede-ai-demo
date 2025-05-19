import {
  IBaseGraphqlRequest,
  IBaseGraphqlResponse,
  TGraphqlErrors,
} from "@common_package";
import gql from "graphql-tag";
import { IHelpCenterCreateInput } from "../resolverTypes/helpCenter-create.input";
import { IHelpCenterCreateResult } from "../resolverTypes/helpCenter-create.result";

export const helpCenterCreateQuery = gql`
  mutation helpCenterCreate($input: HelpCenterCreateInput!) {
    helpCenterCreate(input: $input) {
      _id
    }
  }
`;

export interface IHelpCenterCreateRequest
  extends IBaseGraphqlRequest<IHelpCenterCreateInput> {}

export interface IHelpCenterCreateResponse
  extends IBaseGraphqlResponse<IHelpCenterCreateInput> {
  data: {
    helpCenterCreate: IHelpCenterCreateResult;
  };
  errors: TGraphqlErrors<IHelpCenterCreateInput>;
}
