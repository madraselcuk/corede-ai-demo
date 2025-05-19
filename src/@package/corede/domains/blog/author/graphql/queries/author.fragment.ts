import { gql } from 'graphql-tag'

export const authorFragment = gql`
  fragment AuthorFragment on Author {
    _id
    name
    bio
    linkedIn
    instagram
    x
    facebook
  }
`
