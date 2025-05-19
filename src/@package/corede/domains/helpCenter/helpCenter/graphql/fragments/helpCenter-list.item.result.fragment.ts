import { baseTranslationFragment, fileMetadataFragment } from '@common_package';
import { gql } from 'graphql-tag';

export const helpCenterListItemResultFragment = gql`
  ${baseTranslationFragment}
  ${fileMetadataFragment}

  fragment HelpCenterListItemResultFragment on HelpCenterListItemResult {
    _id
    question
    answer
    videoAttachment {
      ...FileMetadataFragment
    }
    language
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
