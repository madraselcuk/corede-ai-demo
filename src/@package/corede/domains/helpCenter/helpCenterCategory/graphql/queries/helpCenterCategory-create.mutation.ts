import {
  IBaseGraphqlRequest,
  IBaseGraphqlResponse,
  TGraphqlErrors,
} from "@common_package";
import gql from "graphql-tag";
import { IHelpCenterCategoryCreateInput } from "../resolverTypes/helpCenterCategory-create.input";
import { IHelpCenterCategoryCreateResult } from "../resolverTypes/helpCenterCategory-create.result";

export const helpCenterCategoryCreateQuery = gql`
  mutation helpCenterCategoryCreate($input: HelpCenterCategoryCreateInput!) {
    helpCenterCategoryCreate(input: $input) {
      _id
    }
  }
`;

export interface IHelpCenterCategoryCreateRequest
  extends IBaseGraphqlRequest<IHelpCenterCategoryCreateInput> {}

export interface IHelpCenterCategoryCreateResponse
  extends IBaseGraphqlResponse<IHelpCenterCategoryCreateInput> {
  data: {
    helpCenterCategoryCreate: IHelpCenterCategoryCreateResult;
  };
  errors: TGraphqlErrors<IHelpCenterCategoryCreateInput>;
}
