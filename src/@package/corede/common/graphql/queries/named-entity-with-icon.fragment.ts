import { gql } from "graphql-tag";

export const namedEntityWithIconFragment = gql`
  fragment NamedEntityWithIconFragment on NamedEntityWithIcon {
    _id
    name
    icon
    color
  }
`;
