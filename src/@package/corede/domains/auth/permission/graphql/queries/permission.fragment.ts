import { gql } from "graphql-tag";

export const basePermissionFragment = gql`
  fragment BasePermissionFragment on BasePermissionEntity {
    _id
    action
    subject
    actionScope
  }
`;

export const permissionFragment = gql`
  fragment PermissionFragment on Permission {
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
