import { gql } from 'graphql-tag';

export const commentListItemResultFragment = gql`
  fragment CommentListItemResultFragment on CommentListItemResult {
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
