import { baseTranslationFragment } from "@common_package";
import { gql } from "graphql-tag";

export const blogTargetCategoryResultFragment = gql`
  ${baseTranslationFragment}

  fragment BlogTargetCategoryResultFragment on BlogTargetCategoryResult {
    _id
    name
    nameTranslation {
      ...BaseTranslationFragment
    }
    icon
  }
`;
