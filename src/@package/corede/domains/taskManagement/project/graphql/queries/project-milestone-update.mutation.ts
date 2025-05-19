import {
  IBaseGraphqlRequest,
  IBaseGraphqlResponse,
  TGraphqlErrors,
} from "@common_package";
import gql from 'graphql-tag';
import {
  IProjectMilestoneUpdateInput,
  IProjectMilestoneUpdateFilterInput,
} from '../resolverTypes/project-milestone-update.input';
import { IProjectMilestoneUpdateResult } from '../resolverTypes/project-milestone-update.result';

export const projectMilestoneUpdateQuery = gql`
  mutation projectMilestoneUpdate(
    $filter: ProjectMilestoneUpdateFilterInput!
    $input: ProjectMilestoneUpdateInput!
  ) {
    projectMilestoneUpdate(filter: $filter, input: $input) {
      _id
    }
  }
`;

export interface IProjectMilestoneUpdateRequest
  extends IBaseGraphqlRequest<
    IProjectMilestoneUpdateInput,
    IProjectMilestoneUpdateFilterInput
  > {}

export interface IProjectMilestoneUpdateResponse
  extends IBaseGraphqlResponse<IProjectMilestoneUpdateInput> {
  data: {
    projectMilestoneUpdate: IProjectMilestoneUpdateResult;
  };
  errors: TGraphqlErrors<IProjectMilestoneUpdateInput>;
}
