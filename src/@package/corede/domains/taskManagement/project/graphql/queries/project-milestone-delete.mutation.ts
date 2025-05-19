import {
  IBaseGraphqlRequest,
  IBaseGraphqlResponse,
  TGraphqlErrors,
} from "@common_package";

import gql from 'graphql-tag';
import {
  IProjectMilestoneDeleteInput,
  IProjectMilestoneDeleteResult,
} from '../resolverTypes';

export const projectMilestoneDeleteQuery = gql`
  mutation projectMilestoneDelete($input: ProjectMilestoneDeleteInput!) {
    projectMilestoneDelete(input: $input) {
      success
    }
  }
`;

export interface IProjectMilestoneDeleteRequest
  extends IBaseGraphqlRequest<IProjectMilestoneDeleteInput> {}

export interface IProjectMilestoneDeleteResponse
  extends IBaseGraphqlResponse<IProjectMilestoneDeleteInput> {
  data: {
    projectMilestoneDelete: IProjectMilestoneDeleteResult;
  };
  errors: TGraphqlErrors<IProjectMilestoneDeleteInput>;
}
