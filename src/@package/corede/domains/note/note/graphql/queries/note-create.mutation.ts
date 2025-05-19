import {
  IBaseGraphqlRequest,
  IBaseGraphqlResponse,
  TGraphqlErrors,
} from '@common_package';
import gql from 'graphql-tag';
import { INoteCreateInput, INoteCreateResult } from '../resolverTypes';

export const noteCreateQuery = gql`
  mutation noteCreate($input: NoteCreateInput!) {
    noteCreate(input: $input) {
      _id
    }
  }
`;

export interface INoteCreateRequest
  extends IBaseGraphqlRequest<INoteCreateInput> {}

export interface INoteCreateResponse
  extends IBaseGraphqlResponse<INoteCreateInput> {
  data: {
    noteCreate: INoteCreateResult;
  };
  errors: TGraphqlErrors<INoteCreateInput>;
}
