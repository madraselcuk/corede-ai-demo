import { baseTranslationFragment } from '@common_package';
import { gql } from 'graphql-tag';

export const faqListItemPublicResultFragment = gql`
  ${baseTranslationFragment}

  fragment FaqListItemPublicResultFragment on FaqListItemPublicResult {
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
