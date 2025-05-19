import { gql } from "graphql-tag";

import {
  IBaseGraphqlRequest,
  IBaseGraphqlResponse,
  ICount,
  TGraphqlErrors,
} from "@common_package";

export const noteListCountQuery = gql`
  query noteListCount {
    noteListCount {
      count
    }
  }
`;

export interface INoteListCountRequest
  extends IBaseGraphqlRequest<undefined, undefined> {}

export interface INoteListCountResponse
  extends IBaseGraphqlResponse<undefined> {
  data: {
    noteListCount: ICount;
  };
  errors: TGraphqlErrors<undefined>;
}
