import { fileMetadataFragment } from "@common_package";
import { gql } from "graphql-tag";

export const userListItemResultFragment = gql`
  ${fileMetadataFragment}

  fragment UserListItemResultFragment on UserListItemResult {
    _id
    type
    status
    role

    roles {
      _id
      name
    }

    organization {
      _id
      name
    }
    department {
      _id
      name
    }

    name
    surname
    birthDate
    gender
    address
    phoneNumber
    profileImage {
      ...FileMetadataFragment
    }
    backgroundImage {
      ...FileMetadataFragment
    }
    description
    country
    state
    city

    phoneNumber
    phoneNumberVerified
    email
    emailVerified

    language

    lastLoginDate
    createdAt
    updatedAt
    createdBy {
      _id
    }
    updatedBy {
      _id
    }
  }
`;
