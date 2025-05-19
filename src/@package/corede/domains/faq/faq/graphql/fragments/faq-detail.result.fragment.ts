import { baseTranslationFragment } from '@common_package';
import { gql } from 'graphql-tag';

export const faqDetailResultFragment = gql`
  ${baseTranslationFragment}

  fragment FaqDetailResultFragment on FaqDetailResult {
    _id
    question
    answer
    language
    popular
    readingTime
    category {
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
    createdAt
    createdBy {
      _id
    }
    updatedAt
    updatedBy {
      _id
    }
  }
`;
