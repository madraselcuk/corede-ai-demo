import { gql } from "graphql-tag";
import { DocumentNode } from "graphql";

import {
  IBaseGraphqlRequest,
  IBaseGraphqlResponse,
  TGraphqlErrors,
} from "@common_package";
import { IProjectDetailResult } from "../resolverTypes/project-detail.result";
import { projectDetailResultFragment } from "./project-detail.result.fragment";
import { IProjectDetailInput } from "../resolverTypes";

/**
 * @param params.fragment needs to be derived from `ProjectDetailResult` fragment
 * @param params.fragmentName needs to be unique
 */
export function projectDetailQuery(params?: {
  fragment: DocumentNode;
  fragmentName: string;
}): DocumentNode {
  return gql`
    ${params?.fragment ?? projectDetailResultFragment}

    query projectDetail($input: ProjectDetailInput!) {
      projectDetail(input: $input) {
        ...${params?.fragmentName ?? "ProjectDetailResultFragment"}
      }
    }
  `;
}

export interface IProjectDetailRequest
  extends IBaseGraphqlRequest<IProjectDetailInput, undefined> {}

export interface IProjectDetailResponse
  extends IBaseGraphqlResponse<IProjectDetailInput> {
  data: {
    projectDetail: IProjectDetailResult;
  };
  errors: TGraphqlErrors<IProjectDetailInput>;
}
