import { gql } from 'graphql-tag';

export const commentFragment = gql`
  fragment CommentFragment on Comment {
    _id
    content
    target {
      _id
    }
    targetType
    tags
    replies {
      content
      tags
    }
    createdBy {
      _id
    }
    createdAt
    updatedAt
  }
`;
