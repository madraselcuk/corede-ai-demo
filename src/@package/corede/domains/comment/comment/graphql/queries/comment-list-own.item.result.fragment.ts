import { gql } from 'graphql-tag';

export const commentListOwnItemResultFragment = gql`
  fragment CommentListOwnItemResultFragment on CommentListOwnItemResult {
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
