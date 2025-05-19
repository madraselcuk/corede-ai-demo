import {
  IBaseGraphqlRequest,
  IBaseGraphqlResponse,
  TGraphqlErrors,
} from "@common_package";
import gql from 'graphql-tag';
import { IProjectMilestoneTaskDeleteInput } from '../resolverTypes/project-milestone-task-delete.input';
import { IProjectMilestoneTaskDeleteResult } from '../resolverTypes/project-milestone-task-delete.result';

export const projectMilestoneTaskDeleteQuery = gql`
  mutation projectMilestoneTaskDelete(
    $filter: ProjectMilestoneTaskDeleteFilterInput!
    $input: ProjectMilestoneTaskDeleteInput!
  ) {
    projectMilestoneTaskDelete(filter: $filter, input: $input) {
      _id
    }
  }
`;

export interface IProjectMilestoneTaskDeleteRequest
  extends IBaseGraphqlRequest<IProjectMilestoneTaskDeleteInput> {}

export interface IProjectMilestoneTaskDeleteResponse
  extends IBaseGraphqlResponse<IProjectMilestoneTaskDeleteInput> {
  data: {
    projectMilestoneTaskDelete: IProjectMilestoneTaskDeleteResult;
  };
  errors: TGraphqlErrors<IProjectMilestoneTaskDeleteInput>;
}
