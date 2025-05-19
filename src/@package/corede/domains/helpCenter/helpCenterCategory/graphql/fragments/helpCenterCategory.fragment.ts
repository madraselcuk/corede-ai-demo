import { gql } from "graphql-tag";
import { baseTranslationFragment } from "@common_package";

export const baseHelpCenterCategoryFragment = gql`
  ${baseTranslationFragment}

  fragment BaseHelpCenterCategoryFragment on BaseHelpCenterCategory {
    _id
    name
    nameTranslation {
      ...BaseTranslationFragment
    }
    icon
    parentCategory {
      _id
    }
  }
`;

export const helpCenterCategoryFragment = gql`
  ${baseHelpCenterCategoryFragment}

  fragment HelpCenterCategoryFragment on HelpCenterCategory {
    _id
    name
    nameTranslation {
      ...BaseTranslationFragment
    }
    icon
    parentCategory {
      ...BaseHelpCenterCategoryFragment
    }
  }
`;
