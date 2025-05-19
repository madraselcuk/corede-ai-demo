import { gql } from "graphql-tag";

export const departmentListByRelatedItemResultFragment = gql`
  fragment DepartmentListByRelatedItemResultFragment on DepartmentListByRelatedItemResult {
    _id
    name
  }
`;
