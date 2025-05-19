import { baseTranslationFragment } from "@common_package";
import { gql } from "graphql-tag";

export const baseBlogCategoryFragment = gql`
  ${baseTranslationFragment}

  fragment BaseBlogCategoryFragment on BaseBlogCategory {
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

export const blogCategoryFragment = gql`
  ${baseBlogCategoryFragment}

  fragment BlogCategoryFragment on BlogCategory {
    _id
    name
    nameTranslation {
      ...BaseTranslationFragment
    }
    icon
    parentCategory {
      ...BaseBlogCategoryFragment
    }
  }
`;
