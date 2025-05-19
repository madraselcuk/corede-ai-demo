import {
  IBaseGraphqlRequest,
  IBaseGraphqlResponse,
  IJobInput,
  IJobResult,
  TGraphqlErrors,
} from "@common_package";
import gql from "graphql-tag";

export const runDeleteFilesWithoutEntitiesJobQuery = gql`
  mutation runDeleteFilesWithoutEntitiesJob($input: JobInput) {
    runDeleteFilesWithoutEntitiesJob(input: $input) {
      success
      count
    }
  }
`;

export interface IRunDeleteFilesWithoutEntitiesJobRequest
  extends IBaseGraphqlRequest<IJobInput> {}

export interface IRunDeleteFilesWithoutEntitiesJobResponse
  extends IBaseGraphqlResponse<IJobInput> {
  data: {
    runDeleteFilesWithoutEntitiesJob: IJobResult;
  };
  errors: TGraphqlErrors<IJobInput>;
}
