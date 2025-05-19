import { gql } from "graphql-tag";

export const permissionListItemResultFragment = gql`
  fragment PermissionListItemResultFragment on PermissionListItemResult {
    _id
    action
    subject
    actionScope
    domain
    subdomain
    category
  }
`;
