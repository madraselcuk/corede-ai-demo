import {
  IBaseGraphqlRequest,
  IBaseGraphqlResponse,
  IJobInput,
  IJobResult,
  TGraphqlErrors,
} from "@common_package";
import gql from "graphql-tag";

export const runUpdateTrialExpiredOrganizationsJobQuery = gql`
  mutation runUpdateTrialExpiredOrganizationsJob($input: JobInput) {
    runUpdateTrialExpiredOrganizationsJob(input: $input) {
      success
      count
    }
  }
`;

export interface IRunUpdateTrialExpiredOrganizationsJobRequest
  extends IBaseGraphqlRequest<IJobInput> {}

export interface IRunUpdateTrialExpiredOrganizationsJobResponse
  extends IBaseGraphqlResponse<IJobInput> {
  data: {
    runUpdateTrialExpiredOrganizationsJob: IJobResult;
  };
  errors: TGraphqlErrors<IJobInput>;
}
