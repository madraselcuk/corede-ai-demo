import { gql } from "graphql-tag";

export const permissionDetailResultFragment = gql`
  fragment PermissionDetailResultFragment on PermissionDetailResult {
    _id
    action
    subject
    actionScope
    description
    domain
    subdomain
    category
  }
`;
