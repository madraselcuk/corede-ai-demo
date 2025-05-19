import {
  IBaseGraphqlRequest,
  IBaseGraphqlResponse,
  TGraphqlErrors,
} from '@common_package';
import gql from 'graphql-tag';
import {
  IHelpCenterDeleteManyInput,
  IHelpCenterDeleteManyResult,
} from '../resolverTypes';

export const helpCenterDeleteManyQuery = gql`
  mutation helpCenterDeleteMany($input: HelpCenterDeleteManyInput!) {
    helpCenterDeleteMany(input: $input) {
      success
    }
  }
`;

export interface IHelpCenterDeleteManyRequest
  extends IBaseGraphqlRequest<IHelpCenterDeleteManyInput> {}

export interface IHelpCenterDeleteManyResponse
  extends IBaseGraphqlResponse<IHelpCenterDeleteManyInput> {
  data: {
    helpCenterDeleteMany: IHelpCenterDeleteManyResult;
  };
  errors: TGraphqlErrors<IHelpCenterDeleteManyInput>;
}
