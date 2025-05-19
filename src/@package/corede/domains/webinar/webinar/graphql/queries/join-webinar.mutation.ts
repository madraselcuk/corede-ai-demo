import {
  IBaseGraphqlRequest,
  IBaseGraphqlResponse,
  TGraphqlErrors,
} from "@common_package";
import gql from "graphql-tag";
import { IJoinWebinarInput } from "../resolverTypes/join-webinar.input";
import { IJoinWebinarResult } from "../resolverTypes/join-webinar.result";
import { joinWebinarResultFragment } from "./webinar-participant.fragment";
import { IJoinWebinarFilterInput } from "../resolverTypes";

export const joinWebinarQuery = gql`
  ${joinWebinarResultFragment}

  mutation joinWebinar(
    $filter: JoinWebinarFilterInput!
    $input: JoinWebinarInput!
  ) {
    joinWebinar(filter: $filter, input: $input) {
      ...JoinWebinarResultFragment
    }
  }
`;

export interface IJoinWebinarRequest
  extends IBaseGraphqlRequest<IJoinWebinarInput, IJoinWebinarFilterInput> {}

export interface IJoinWebinarResponse
  extends IBaseGraphqlResponse<IJoinWebinarInput> {
  data: {
    joinWebinar: IJoinWebinarResult;
  };
  errors: TGraphqlErrors<IJoinWebinarInput>;
}
