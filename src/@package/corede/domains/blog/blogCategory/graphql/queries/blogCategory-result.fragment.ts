import { gql } from "graphql-tag";
import { baseBlogCategoryFragment } from "./blogCategory.fragment";
import { baseTranslationFragment } from "@common_package";

export const blogCategoryResultFragment = gql`
  ${baseBlogCategoryFragment}

  fragment BlogCategoryResultFragment on BlogCategoryResult {
    _id
    name
    nameTranslation {
      ...BaseTranslationFragment
    }
    icon
    parentCategory {
      ...BaseBlogCategoryFragment
    }
    subCategories {
      ...BaseBlogCategoryFragment
    }
  }
`;

export const blogCategoriesItemResultFragment = gql`
  ${baseTranslationFragment}

  fragment BlogCategoriesItemResultFragment on BlogCategoriesItemResult {
    _id
    name
    nameTranslation {
      ...BaseTranslationFragment
    }
    icon
    parentCategory {
      _id
    }
    hasSubBlogCategory
  }
`;
