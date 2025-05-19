import { gql } from "graphql-tag";

import {
  IBaseGraphqlRequest,
  IBaseGraphqlResponse,
  ICount,
  TGraphqlErrors,
} from "@common_package";

export const reminderListCountQuery = gql`
  query reminderListCount {
    reminderListCount {
      count
    }
  }
`;

export interface IReminderListCountRequest
  extends IBaseGraphqlRequest<undefined, undefined> {}

export interface IReminderListCountResponse
  extends IBaseGraphqlResponse<undefined> {
  data: {
    reminderListCount: ICount;
  };
  errors: TGraphqlErrors<undefined>;
}
