import { gql } from "graphql-tag";

import {
  IBaseGraphqlRequest,
  IBaseGraphqlResponse,
  TGraphqlErrors,
} from "@common_package";

import { INoteListOwnResult } from "../resolverTypes/note-list-own.result";
import { INoteListOwnInput } from "../resolverTypes";
import { noteListOwnItemResultFragment } from "./note-list-own.item.result.fragment";

export const noteListOwnQuery = gql`
  ${noteListOwnItemResultFragment}

  query noteListOwn($input: NoteListOwnInput) {
    noteListOwn(input: $input) {
      data {
        ...NoteListOwnItemResultFragment
      }
      count
    }
  }
`;

export interface INoteListOwnRequest
  extends IBaseGraphqlRequest<INoteListOwnInput, undefined> {}

export interface INoteListOwnResponse
  extends IBaseGraphqlResponse<INoteListOwnInput> {
  data: {
    noteListOwn: INoteListOwnResult;
  };
  errors: TGraphqlErrors<INoteListOwnInput>;
}
