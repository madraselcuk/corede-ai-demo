import { baseTranslationFragment } from '@common_package';
import { gql } from 'graphql-tag';

export const faqCategoryListItemPublicResultFragment = gql`
  ${baseTranslationFragment}

  fragment FaqCategoryListItemPublicResultFragment on FaqCategoryListItemPublicResult {
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
