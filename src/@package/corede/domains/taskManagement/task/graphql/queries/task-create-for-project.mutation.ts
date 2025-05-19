import {
  IBaseGraphqlRequest,
  IBaseGraphqlResponse,
  TGraphqlErrors,
} from "@common_package";
import gql from 'graphql-tag';
import {
  ITaskCreateForProjectInput,
  ITaskCreateForProjectResult,
} from '../resolverTypes';

export const taskCreateForProjectQuery = gql`
  mutation taskCreateForProject($input: TaskCreateForProjectInput!) {
    taskCreateForProject(input: $input) {
      _id
    }
  }
`;

export interface ITaskCreateForProjectRequest
  extends IBaseGraphqlRequest<ITaskCreateForProjectInput> {}

export interface ITaskCreateForProjectResponse
  extends IBaseGraphqlResponse<ITaskCreateForProjectInput> {
  data: {
    taskCreateForProject: ITaskCreateForProjectResult;
  };
  errors: TGraphqlErrors<ITaskCreateForProjectInput>;
}
