import { baseTranslationFragment, fileMetadataFragment } from '@common_package';
import { gql } from 'graphql-tag';

export const blogFragment = gql`
  ${fileMetadataFragment}
  ${baseTranslationFragment}

  fragment BlogFragment on Blog {
    _id
    title
    content
    description
    language
    showcase
    editorsChoice
    popular
    readingTime
    references
    relatedVideo
    slug
    tags
    image {
      ...FileMetadataFragment
    }
    author {
      _id
      name
      bio
    }
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
    targetCategory {
      _id
      icon
      name
      nameTranslation {
        ...BaseTranslationFragment
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
