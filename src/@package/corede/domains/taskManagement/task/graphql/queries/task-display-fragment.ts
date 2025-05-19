import { gql } from 'graphql-tag'

export const taskDisplayFragment = gql`
  fragment TaskDisplayFragment on TaskDisplay {
    _id
    status
    title
    progress
  }
`
