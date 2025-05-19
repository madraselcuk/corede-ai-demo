import { gql } from "graphql-tag";
import { DocumentNode } from "graphql";
import {
  IBaseGraphqlRequest,
  IBaseGraphqlResponse,
  TGraphqlErrors,
} from "@common_package";

import { IProjectListResult } from "../resolverTypes/project-list.result";
import { IProjectListInput } from "../resolverTypes";
import { projectListItemResultFragment } from "./project-list.item.result.fragment";

/**
 * @param params.fragment needs to be derived from `ProjectListItemResult` fragment
 * @param params.fragmentName needs to be unique
 */
export function projectListQuery(params?: {
  fragment: DocumentNode;
  fragmentName: string;
}): DocumentNode {
  return gql`
    ${params?.fragment ?? projectListItemResultFragment}

    query projectList($input: ProjectListInput) {
      projectList(input: $input) {
        data {
          ...${params?.fragmentName ?? "ProjectListItemResultFragment"}
        }
        count
      }
    }
  `;
}

export interface IProjectListRequest
  extends IBaseGraphqlRequest<IProjectListInput, undefined> {}

export interface IProjectListResponse
  extends IBaseGraphqlResponse<IProjectListInput> {
  data: {
    projectList: IProjectListResult;
  };
  errors: TGraphqlErrors<IProjectListInput>;
}
