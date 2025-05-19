import { gql } from "graphql-tag";

import {
  IBaseGraphqlRequest,
  IBaseGraphqlResponse,
  ICount,
  TGraphqlErrors,
} from "@common_package";

export const appointmentListCountQuery = gql`
  query appointmentListCount {
    appointmentListCount {
      count
    }
  }
`;

export interface IAppointmentListCountRequest
  extends IBaseGraphqlRequest<undefined, undefined> {}

export interface IAppointmentListCountResponse
  extends IBaseGraphqlResponse<undefined> {
  data: {
    appointmentListCount: ICount;
  };
  errors: TGraphqlErrors<undefined>;
}
