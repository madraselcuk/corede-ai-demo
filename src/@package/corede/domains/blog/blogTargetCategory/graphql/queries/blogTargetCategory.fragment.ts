import { baseTranslationFragment } from "@common_package";
import { gql } from "graphql-tag";

export const blogTargetCategoryFragment = gql`
  ${baseTranslationFragment}

  fragment BlogTargetCategoryFragment on BlogTargetCategory {
    _id
    name
    nameTranslation {
      ...BaseTranslationFragment
    }
    icon
  }
`;
