import {
  IBaseGraphqlRequest,
  IBaseGraphqlResponse,
  TGraphqlErrors,
} from '@common_package';
import gql from 'graphql-tag';
import { IDeleteWebinarInput } from '../resolverTypes/delete-webinar.input';
import { IDeleteWebinarResult } from '../resolverTypes/delete-webinar.result';

export const deleteWebinarQuery = gql`
  mutation deleteWebinar($input: DeleteWebinarInput!) {
    deleteWebinar(input: $input) {
      success
    }
  }
`;

export interface IDeleteWebinarRequest
  extends IBaseGraphqlRequest<IDeleteWebinarInput> {}

export interface IDeleteWebinarResponse
  extends IBaseGraphqlResponse<IDeleteWebinarInput> {
  data: {
    deleteWebinar: IDeleteWebinarResult;
  };
  errors: TGraphqlErrors<IDeleteWebinarInput>;
}
