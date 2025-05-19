import { gql } from "graphql-tag";

import {
  IBaseGraphqlRequest,
  IBaseGraphqlResponse,
  ICount,
  TGraphqlErrors,
} from "@common_package";

export const departmentListCountQuery = gql`
  query departmentListCount {
    departmentListCount {
      count
    }
  }
`;

export interface IDepartmentListCountRequest
  extends IBaseGraphqlRequest<undefined, undefined> {}

export interface IDepartmentListCountResponse
  extends IBaseGraphqlResponse<undefined> {
  data: {
    departmentListCount: ICount;
  };
  errors: TGraphqlErrors<undefined>;
}
