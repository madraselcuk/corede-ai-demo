import { baseTranslationFragment } from '@common_package';
import { gql } from 'graphql-tag';

export const faqCategoryListItemResultFragment = gql`
  ${baseTranslationFragment}

  fragment FaqCategoryListItemResultFragment on FaqCategoryListItemResult {
    _id
    name
    nameTranslation {
      ...BaseTranslationFragment
    }
    icon
    parentCategory {
      _id
    }
    hasSubFaqCategory
  }
`;
