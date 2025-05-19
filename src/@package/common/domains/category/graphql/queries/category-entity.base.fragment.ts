import { gql } from "graphql-tag";
import { baseTranslationFragment } from "../../../../structures";

export const baseCategoryEntityFragment = gql`
  ${baseTranslationFragment}

  fragment BaseCategoryEntityFragment on BaseCategoryEntity {
    _id
    name
    nameTranslation {
      ...BaseTranslationFragment
    }
    icon
  }
`;
