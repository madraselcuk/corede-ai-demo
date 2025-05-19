import { gql } from 'graphql-tag';
import { baseFaqCategoryFragment } from './faqCategory.fragment';

export const faqCategoryDetailResultFragment = gql`
  ${baseFaqCategoryFragment}

  fragment FaqCategoryDetailResultFragment on FaqCategoryDetailResult {
    _id
    name
    nameTranslation {
      ...BaseTranslationFragment
    }
    icon
    parentCategory {
      ...BaseFaqCategoryFragment
    }
    subCategories {
      ...BaseFaqCategoryFragment
    }
  }
`;
