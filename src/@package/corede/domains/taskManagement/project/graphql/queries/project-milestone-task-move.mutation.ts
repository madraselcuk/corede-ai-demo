import {
  IBaseGraphqlRequest,
  IBaseGraphqlResponse,
  TGraphqlErrors,
} from "@common_package";
import gql from 'graphql-tag';
import { IProjectMilestoneTaskMoveInput } from '../resolverTypes/project-milestone-task-move.input';
import { IProjectMilestoneTaskMoveResult } from '../resolverTypes/project-milestone-task-move.result';

export const projectMilestoneTaskMoveQuery = gql`
  mutation projectMilestoneTaskMove(
    $filter: ProjectMilestoneTaskMoveFilterInput!
    $input: ProjectMilestoneTaskMoveInput!
  ) {
    projectMilestoneTaskMove(filter: $filter, input: $input) {
      _id
    }
  }
`;

export interface IProjectMilestoneTaskMoveRequest
  extends IBaseGraphqlRequest<IProjectMilestoneTaskMoveInput> {}

export interface IProjectMilestoneTaskMoveResponse
  extends IBaseGraphqlResponse<IProjectMilestoneTaskMoveInput> {
  data: {
    projectMilestoneTaskMove: IProjectMilestoneTaskMoveResult;
  };
  errors: TGraphqlErrors<IProjectMilestoneTaskMoveInput>;
}
