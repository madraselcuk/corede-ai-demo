import {
  IBaseGraphqlRequest,
  IBaseGraphqlResponse,
  IJobInput,
  IJobResult,
  TGraphqlErrors,
} from "@common_package";
import gql from "graphql-tag";

export const runCompleteDueRemindersJobQuery = gql`
  mutation runCompleteDueRemindersJob($input: JobInput) {
    runCompleteDueRemindersJob(input: $input) {
      success
      count
    }
  }
`;

export interface IRunCompleteDueRemindersJobRequest
  extends IBaseGraphqlRequest<IJobInput> {}

export interface IRunCompleteDueRemindersJobResponse
  extends IBaseGraphqlResponse<IJobInput> {
  data: {
    runCompleteDueRemindersJob: IJobResult;
  };
  errors: TGraphqlErrors<IJobInput>;
}
