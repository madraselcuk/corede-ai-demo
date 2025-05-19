import { gql } from "graphql-tag";
import { DocumentNode } from 'graphql';
import {
  IBaseGraphqlRequest,
  IBaseGraphqlResponse,
  TGraphqlErrors,
} from "@common_package";

import { ITaskListResult } from "../resolverTypes/task-list.result";
import { ITaskListInput } from "../resolverTypes";
import { taskListItemResultFragment } from "./task-list.item.result.fragment";

/**
 * @param params.fragment needs to be derived from `TaskListItemResult` fragment
 * @param params.fragmentName needs to be unique
 */
export function taskListQuery(params?: {
  fragment: DocumentNode;
  fragmentName: string;
}): DocumentNode {
  return gql`
    ${params?.fragment ?? taskListItemResultFragment}

    query taskList($input: TaskListInput) {
      taskList(input: $input) {
        data {
          ...${params?.fragmentName ?? 'TaskListItemResultFragment'}
        }
        count
      }
    }
  `;
}

export interface ITaskListRequest
  extends IBaseGraphqlRequest<ITaskListInput, undefined> {}

export interface ITaskListResponse
  extends IBaseGraphqlResponse<ITaskListInput> {
  data: {
    taskList: ITaskListResult;
  };
  errors: TGraphqlErrors<ITaskListInput>;
}
