import {
  IBaseGraphqlRequest,
  IBaseGraphqlResponse,
  TGraphqlErrors,
} from '@common_package'
import gql from 'graphql-tag'
import { IProjectMilestoneTaskAddInput } from '../resolverTypes/project-milestone-task-add.input'
import { IProjectMilestoneTaskAddResult } from '../resolverTypes/project-milestone-task-add.result'

export const projectMilestoneTaskAddQuery = gql`
  mutation projectMilestoneTaskAdd($input: ProjectMilestoneTaskAddInput!) {
    projectMilestoneTaskAdd(input: $input) {
      _id
    }
  }
`

export interface IProjectMilestoneTaskAddRequest
  extends IBaseGraphqlRequest<IProjectMilestoneTaskAddInput> {}

export interface IProjectMilestoneTaskAddResponse
  extends IBaseGraphqlResponse<IProjectMilestoneTaskAddInput> {
  data: {
    projectMilestoneTaskAdd: IProjectMilestoneTaskAddResult
  }
  errors: TGraphqlErrors<IProjectMilestoneTaskAddInput>
}
