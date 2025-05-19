import { gql } from "graphql-tag";

import {
  IBaseGraphqlRequest,
  IBaseGraphqlResponse,
  ICount,
  TGraphqlErrors,
} from "@common_package";

export const projectListCountQuery = gql`
  query projectListCount {
    projectListCount {
      count
    }
  }
`;

export interface IProjectListCountRequest
  extends IBaseGraphqlRequest<undefined, undefined> {}

export interface IProjectListCountResponse
  extends IBaseGraphqlResponse<undefined> {
  data: {
    projectListCount: ICount;
  };
  errors: TGraphqlErrors<undefined>;
}
