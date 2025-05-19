import { gql } from "graphql-tag";

export const namedEntityFragment = gql`
  fragment NamedEntityFragment on NamedEntity {
    _id
    name
  }
`;
