import { baseTranslationFragment } from '@common_package';
import { gql } from 'graphql-tag';

export const faqDetailPublicResultFragment = gql`
  ${baseTranslationFragment}

  fragment FaqDetailPublicResultFragment on FaqDetailPublicResult {
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
