import { gql } from "graphql-tag";

import {
  IBaseGraphqlRequest,
  IBaseGraphqlResponse,
  TGraphqlErrors,
} from "@common_package";
import { IHelpCenterDetailInput } from "../resolverTypes/helpCenter-detail.input";
import { IHelpCenterDetailResult } from "../resolverTypes/helpCenter-detail.result";
import { helpCenterDetailResultFragment } from "../fragments/helpCenter-detail-result.fragment";

export const helpCenterDetailQuery = gql`
  ${helpCenterDetailResultFragment}

  query helpCenterDetail($input: HelpCenterDetailInput!) {
    helpCenterDetail(input: $input) {
      ...HelpCenterDetailResultFragment
    }
  }
`;

export interface IHelpCenterDetailRequest
  extends IBaseGraphqlRequest<IHelpCenterDetailInput, undefined> {}

export interface IHelpCenterDetailResponse
  extends IBaseGraphqlResponse<IHelpCenterDetailInput> {
  data: {
    helpCenterDetail: IHelpCenterDetailResult;
  };
  errors: TGraphqlErrors<IHelpCenterDetailInput>;
}
