import { gql } from 'graphql-tag'

export const authorDetailResultFragment = gql`
  fragment AuthorDetailResultFragment on AuthorDetailResult {
    _id
    name
    bio
    linkedIn
    instagram
    x
    facebook
  }
`
