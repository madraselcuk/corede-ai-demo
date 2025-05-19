import { gql } from 'graphql-tag'

export const authorListItemResultFragment = gql`
  fragment AuthorListItemResultFragment on AuthorListItemResult {
    _id
    name
    bio
    linkedIn
    instagram
    x
    facebook
  }
`
