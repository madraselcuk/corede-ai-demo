import { gql } from "graphql-tag";
import { baseHelpCenterCategoryFragment } from "./helpCenterCategory.fragment";

export const helpCenterCategoryDetailResultFragment = gql`
  ${baseHelpCenterCategoryFragment}

  fragment HelpCenterCategoryDetailResultFragment on HelpCenterCategoryDetailResult {
    _id
    name
    nameTranslation {
      ...BaseTranslationFragment
    }
    icon
    parentCategory {
      ...BaseHelpCenterCategoryFragment
    }
    subCategories {
      ...BaseHelpCenterCategoryFragment
    }
  }
`;