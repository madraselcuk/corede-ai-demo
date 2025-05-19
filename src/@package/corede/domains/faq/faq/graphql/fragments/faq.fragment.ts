import { baseTranslationFragment } from '@common_package';
import { gql } from 'graphql-tag';

export const faqFragment = gql`
  ${baseTranslationFragment}

  fragment FaqFragment on Faq {
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
