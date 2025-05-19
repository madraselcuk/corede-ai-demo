import { gql } from "graphql-tag";

import {
  IBaseGraphqlRequest,
  IBaseGraphqlResponse,
  TGraphqlErrors,
} from "@common_package";

import { INoteListResult } from "../resolverTypes/note-list.result";
import { INoteListOwnInput } from "../resolverTypes";
import { noteListItemResultFragment } from "./note-list.item.result.fragment";

export const noteListByRelatedQuery = gql`
  ${noteListItemResultFragment}

  query noteListByRelated($input: NoteListInput) {
    noteListByRelated(input: $input) {
      data {
        ...NoteListItemResultFragment
      }
      count
    }
  }
`;

export interface INoteListByRelatedRequest
  extends IBaseGraphqlRequest<INoteListOwnInput, undefined> {}

export interface INoteListByRelatedResponse
  extends IBaseGraphqlResponse<INoteListOwnInput> {
  data: {
    noteListByRelated: INoteListResult;
  };
  errors: TGraphqlErrors<INoteListOwnInput>;
}
