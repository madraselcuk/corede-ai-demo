import {
  IBaseGraphqlRequest,
  IBaseGraphqlResponse,
  IJobInput,
  IJobResult,
  TGraphqlErrors,
} from "@common_package";
import gql from "graphql-tag";

export const runCompleteDueAppointmentsJobQuery = gql`
  mutation runCompleteDueAppointmentsJob($input: JobInput) {
    runCompleteDueAppointmentsJob(input: $input) {
      success
      count
    }
  }
`;

export interface IRunCompleteDueAppointmentsJobRequest
  extends IBaseGraphqlRequest<IJobInput> {}

export interface IRunCompleteDueAppointmentsJobResponse
  extends IBaseGraphqlResponse<IJobInput> {
  data: {
    runCompleteDueAppointmentsJob: IJobResult;
  };
  errors: TGraphqlErrors<IJobInput>;
}
