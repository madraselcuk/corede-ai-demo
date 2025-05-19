import { baseTranslationFragment } from "@common_package";
import { gql } from "graphql-tag";

export const helpCenterFragment = gql`
  ${baseTranslationFragment}

  fragment HelpCenterFragment on HelpCenter {
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
