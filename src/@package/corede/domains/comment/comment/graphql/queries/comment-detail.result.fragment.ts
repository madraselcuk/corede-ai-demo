import { gql } from 'graphql-tag';

export const commentDetailResultFragment = gql`
  fragment CommentDetailResultFragment on CommentDetailResult {
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
