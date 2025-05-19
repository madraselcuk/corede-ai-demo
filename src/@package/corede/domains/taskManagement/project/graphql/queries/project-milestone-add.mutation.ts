import {
  IBaseGraphqlRequest,
  IBaseGraphqlResponse,
  TGraphqlErrors,
} from "@common_package";
import gql from 'graphql-tag';
import {
  IProjectMilestoneAddInput,
  IProjectMilestoneAddFilterInput,
} from '../resolverTypes/project-milestone-add.input';
import { IProjectMilestoneAddResult } from '../resolverTypes/project-milestone-add.result';

export const projectMilestoneAddQuery = gql`
  mutation projectMilestoneAdd(
    $filter: ProjectMilestoneAddFilterInput!
    $input: ProjectMilestoneAddInput!
  ) {
    projectMilestoneAdd(filter: $filter, input: $input) {
      _id
    }
  }
`;

export interface IProjectMilestoneAddRequest
  extends IBaseGraphqlRequest<
    IProjectMilestoneAddInput,
    IProjectMilestoneAddFilterInput
  > {}

export interface IProjectMilestoneAddResponse
  extends IBaseGraphqlResponse<IProjectMilestoneAddInput> {
  data: {
    projectMilestoneAdd: IProjectMilestoneAddResult;
  };
  errors: TGraphqlErrors<IProjectMilestoneAddInput>;
}
