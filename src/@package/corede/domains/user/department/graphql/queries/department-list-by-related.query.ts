import { gql } from "graphql-tag";

import {
  IBaseGraphqlRequest,
  IBaseGraphqlResponse,
  TGraphqlErrors,
} from "@common_package";

import { departmentListByRelatedItemResultFragment } from "./department-list-by-related-item-result.fragment";
import {
  IDepartmentListByRelatedInput,
  IDepartmentListByRelatedResult,
} from "../resolverTypes";

export const departmentListByRelatedQuery = gql`
  ${departmentListByRelatedItemResultFragment}

  query departmentListByRelated($input: DepartmentListByRelatedInput) {
    departmentListByRelated(input: $input) {
      data {
        ...DepartmentListByRelatedItemResultFragment
      }
      count
    }
  }
`;

export interface IDepartmentListByRelatedRequest
  extends IBaseGraphqlRequest<IDepartmentListByRelatedInput, undefined> {}

export interface IDepartmentListByRelatedResponse
  extends IBaseGraphqlResponse<IDepartmentListByRelatedInput> {
  data: {
    departmentListByRelated: IDepartmentListByRelatedResult;
  };
  errors: TGraphqlErrors<IDepartmentListByRelatedInput>;
}
