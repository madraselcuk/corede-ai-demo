import { gql } from "graphql-tag";
import { baseTranslationFragment } from "@common_package";

export const baseFaqCategoryFragment = gql`
  ${baseTranslationFragment}

  fragment BaseFaqCategoryFragment on BaseFaqCategory {
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

export const faqCategoryFragment = gql`
  ${baseFaqCategoryFragment}

  fragment FaqCategoryFragment on FaqCategory {
    _id
    name
    nameTranslation {
      ...BaseTranslationFragment
    }
    icon
    parentCategory {
      ...BaseFaqCategoryFragment
    }
  }
`;
