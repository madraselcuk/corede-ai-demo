import { gql } from "graphql-tag";
import { DocumentNode } from "graphql";

import {
  IBaseGraphqlRequest,
  IBaseGraphqlResponse,
  TGraphqlErrors,
} from "@common_package";
import { ITaskDetailResult } from "../resolverTypes/task-detail.result";
import { taskDetailResultFragment } from "./task-detail.result.fragment";
import { ITaskDetailInput } from "../resolverTypes";

/**
 * @param params.fragment needs to be derived from `TaskDetailResult` fragment
 * @param params.fragmentName needs to be unique
 */
export function taskDetailQuery(params?: {
  fragment: DocumentNode;
  fragmentName: string;
}): DocumentNode {
  return gql`
    ${params?.fragment ?? taskDetailResultFragment}

    query taskDetail($input: TaskDetailInput!) {
      taskDetail(input: $input) {
        ...${params?.fragmentName ?? "TaskDetailResultFragment"}
      }
    }
  `;
}

export interface ITaskDetailRequest
  extends IBaseGraphqlRequest<ITaskDetailInput, undefined> {}

export interface ITaskDetailResponse
  extends IBaseGraphqlResponse<ITaskDetailInput> {
  data: {
    taskDetail: ITaskDetailResult;
  };
  errors: TGraphqlErrors<ITaskDetailInput>;
}
