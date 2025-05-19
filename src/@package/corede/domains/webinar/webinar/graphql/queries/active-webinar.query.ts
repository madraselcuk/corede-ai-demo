import { gql } from "graphql-tag";

import {
  IBaseGraphqlRequest,
  IBaseGraphqlResponse,
  TGraphqlErrors,
} from "@common_package";
import { activeWebinarResultFragment } from "./webinar.fragment";
import { IActiveWebinarResult } from "../resolverTypes/active-webinar.result";
import { IActiveWebinarInput } from "../resolverTypes";

export const activeWebinarQuery = gql`
  ${activeWebinarResultFragment}

  query activeWebinar($input: ActiveWebinarInput!) {
    activeWebinar(input: $input) {
      ...ActiveWebinarResultFragment
    }
  }
`;

export interface IActiveWebinarRequest
  extends IBaseGraphqlRequest<IActiveWebinarInput, undefined> {}

export interface IActiveWebinarResponse
  extends IBaseGraphqlResponse<IActiveWebinarInput> {
  data: {
    activeWebinar: IActiveWebinarResult;
  };
  errors: TGraphqlErrors<IActiveWebinarInput>;
}
