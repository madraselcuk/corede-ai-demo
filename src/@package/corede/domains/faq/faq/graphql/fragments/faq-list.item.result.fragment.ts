import { baseTranslationFragment } from '@common_package';
import { gql } from 'graphql-tag';

export const faqListItemResultFragment = gql`
  ${baseTranslationFragment}

  fragment FaqListItemResultFragment on FaqListItemResult {
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
