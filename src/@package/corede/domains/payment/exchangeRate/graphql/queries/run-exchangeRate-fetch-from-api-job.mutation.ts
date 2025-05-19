import {
  IBaseGraphqlRequest,
  IBaseGraphqlResponse,
  IBaseResult,
  TGraphqlErrors,
} from "@common_package";
import gql from "graphql-tag";

export const runExchangeRateFetchFromApiJobQuery = gql`
  mutation runExchangeRateFetchFromApiJob {
    runExchangeRateFetchFromApiJob {
      success
    }
  }
`;

export interface IRunExchangeRateFetchFromApiJobRequest
  extends IBaseGraphqlRequest<undefined> {}

export interface IRunExchangeRateFetchFromApiJobResponse
  extends IBaseGraphqlResponse<undefined> {
  data: {
    runExchangeRateFetchFromApiJob: IBaseResult;
  };
  errors: TGraphqlErrors<undefined>;
}
