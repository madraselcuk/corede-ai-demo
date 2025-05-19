import { gql } from "graphql-tag";

import {
  IBaseGraphqlRequest,
  IBaseGraphqlResponse,
  TGraphqlErrors,
} from "@common_package";
import { IHelpCenterCategoryDetailInput } from "../resolverTypes/helpCenterCategory-detail.input";
import { IHelpCenterCategoryDetailResult } from "../resolverTypes/helpCenterCategory-detail.result";
import { helpCenterCategoryDetailResultFragment } from "../fragments/helpCenterCategory-detail-result.fragment";

export const helpCenterCategoryDetailQuery = gql`
  ${helpCenterCategoryDetailResultFragment}

  query helpCenterCategoryDetail($input: HelpCenterCategoryDetailInput!) {
    helpCenterCategoryDetail(input: $input) {
      ...HelpCenterCategoryDetailResultFragment
    }
  }
`;

export interface IHelpCenterCategoryDetailRequest
  extends IBaseGraphqlRequest<IHelpCenterCategoryDetailInput, undefined> {}

export interface IHelpCenterCategoryDetailResponse
  extends IBaseGraphqlResponse<IHelpCenterCategoryDetailInput> {
  data: {
    helpCenterCategoryDetail: IHelpCenterCategoryDetailResult;
  };
  errors: TGraphqlErrors<IHelpCenterCategoryDetailInput>;
}
